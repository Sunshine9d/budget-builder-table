import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default to profile
            { path: 'profile', component: ProfileComponent },
            { path: 'settings', component: SettingsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
