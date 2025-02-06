import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http';
import {
    BehaviorSubject,
    filter,
    Observable,
    switchMap,
    take,
    throwError,
} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<string | null> =
        new BehaviorSubject<string | null>(null);

    constructor(
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar,
    ) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        // Get the token from AuthService (or localStorage)
        const token = this.authService.getToken();
        // if (token && this.authService.isTokenExpired(token)) {
        //   this.authService.logout();
        //   this.router.navigate(['/login']);
        // }
        let authReq = req;
        // Clone the request and add the Authorization header if the token exists
        if (token) {
            authReq = this.addToken(req, token);
        }

        return next.handle(authReq).pipe(
            catchError((error) => {
                if (error.status >= 300) {
                    this.showErrorAlert(error);
                }
                if (
                    error instanceof HttpErrorResponse &&
                    error.status === 401
                ) {
                    return this.handle401Error(req, next);
                }
                return throwError(error);
            }),
        );
    }

    private addToken(req: HttpRequest<any>, token: string) {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    private handle401Error(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.authService.refreshToken().pipe(
                switchMap((res: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(res.token);
                    return next.handle(this.addToken(req, res.token));
                }),
                catchError((err) => {
                    this.isRefreshing = false;
                    this.authService.logout();
                    return throwError(err);
                }),
            );
        } else {
            return this.refreshTokenSubject.pipe(
                filter((token) => token !== null),
                take(1),
                switchMap((token: string) =>
                    next.handle(this.addToken(req, token!)),
                ),
            );
        }
    }

    private showErrorAlert(error: HttpErrorResponse) {
        let message = `Error ${error.status}: ${error.statusText}`;

        if (error.error && error.error.message) {
            message = error.error.message;
        }

        this.snackBar.open(message, 'Close', {
            duration: 5000,
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
        });
    }

    private handleHttpError(error: HttpErrorResponse) {
        let message = 'An unknown error occurred!';

        switch (error.status) {
            case 400:
                message = 'Bad Request. Please check your input!';
                break;
            case 401:
                message = 'Unauthorized! Please login again.';
                this.authService.logout();
                this.router.navigate(['/login']);
                break;
            case 403:
                message = 'Access Denied! You don’t have permission.';
                break;
            case 404:
                message = 'Resource not found!';
                break;
            case 500:
                message = 'Server Error! Please try again later.';
                break;
            default:
                message = `Error ${error.status}: ${error.statusText}`;
        }
        return message;
    }
}
