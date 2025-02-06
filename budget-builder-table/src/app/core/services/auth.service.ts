import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private apiService: ApiService) {}

    isAuthenticated(): boolean {
        return true;
        return !!localStorage.getItem('token'); // Check if token exists
    }

    login(token: string) {
        localStorage.setItem('token', token);
    }

    login1(credentials: { email: string; password: string }): Observable<any> {
        return this.apiService.post('/login', credentials).pipe(
            tap((res: any) => {
                this.saveTokens(res.token, res.refreshToken);
            }),
        );
    }

    getUserRole(): string {
        return 'admin';
    }

    getToken(): string | null {
        return localStorage.getItem('token'); // Retrieve token from storage
    }

    saveTokens(token: string, refreshToken: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }

    isTokenExpired(token: string): boolean {
        // Check if token is expired
        return false;
        // const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
        // const expiry = payload.exp * 1000; // Convert to milliseconds
        // return Date.now() > expiry;
    }

    getRefreshToken(): string | null {
        return localStorage.getItem('refreshToken');
    }

    refreshToken(): Observable<any> {
        return this.apiService
            .post(`/refresh`, {
                refreshToken: this.getRefreshToken(),
            })
            .pipe(
                tap((res: any) => {
                    this.saveTokens(res.token, res.refreshToken);
                }),
            );
    }
}
