import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [SettingsComponent, ProfileComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        FormsModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
    ],
    exports: [SettingsComponent, ProfileComponent],
})
export class DashboardModule {}
