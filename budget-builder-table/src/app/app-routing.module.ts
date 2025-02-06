import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    // {
    //   path: '',
    //   component: HeaderComponent,
    // },
    // {
    //   path: '',
    //   component: DashboardComponent,
    //   canActivate: [AuthGuard],  // Protect the parent route
    //   children: [
    //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Default child route
    //     { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
    //   ]
    // },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./features/dashboard/dashboard.module').then(
                (m) => m.DashboardModule,
            ),
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'budgets',
        loadChildren: () =>
            import('./features/budgets/budgets.module').then(
                (m) => m.BudgetsModule,
            ),
    },
    { path: '**', redirectTo: 'dashboard' }, // Default route (redirect to dashboard)
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
