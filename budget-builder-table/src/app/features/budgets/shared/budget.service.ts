import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './budget.model';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
    providedIn: 'root',
})
export class BudgetService {
    private _resourceUrl: string = 'budgets';
    constructor(private http: ApiService) {}

    getBudgets(): Observable<Budget[]> {
        return this.http.get<Budget[]>(this._resourceUrl);
    }

    getBudget(id: number): Observable<Budget> {
        return this.http.get<Budget>(`${this._resourceUrl}/${id}`);
    }

    createBudget(budget: Budget): Observable<Budget> {
        return this.http.post<Budget>(this._resourceUrl, budget);
    }

    updateBudget(id: number, budget: Budget): Observable<Budget> {
        return this.http.put<Budget>(`${this._resourceUrl}/${id}`, budget);
    }

    deleteBudget(id: number): Observable<void> {
        return this.http.delete<void>(`${this._resourceUrl}/${id}`);
    }
}
