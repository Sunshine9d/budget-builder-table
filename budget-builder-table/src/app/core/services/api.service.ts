import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root', // Makes the service available globally
})
export class ApiService {
    private baseUrl = 'https://api.example.com'; // Change to your API URL

    constructor(private http: HttpClient) {}

    // Generic GET request
    get<T>(endpoint: string, params?: HttpParams): Observable<T> {
        return this.http
            .get<T>(`${this.baseUrl}/${endpoint}`, { params })
            .pipe(catchError(this.handleError));
    }

    // Generic POST request
    post<T>(endpoint: string, body: any, options = {}): Observable<T> {
        return this.http
            .post<T>(`${this.baseUrl}/${endpoint}`, body, options)
            .pipe(catchError(this.handleError));
    }

    // Generic PUT request
    put<T>(endpoint: string, body: any): Observable<T> {
        return this.http
            .put<T>(`${this.baseUrl}/${endpoint}`, body)
            .pipe(catchError(this.handleError));
    }

    // Generic DELETE request
    delete<T>(endpoint: string): Observable<T> {
        return this.http
            .delete<T>(`${this.baseUrl}/${endpoint}`)
            .pipe(catchError(this.handleError));
    }

    // Handle errors
    private handleError(error: any): Observable<never> {
        console.error('API Error:', error);
        throw error;
    }
}
