import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: false,
})
export class SettingsComponent implements OnInit {
    user: any; // Store user settings here
    loading = true;
    errorMessage: string | null = null;

    settingsForm = new FormGroup({
        email: new FormControl(''),
        name: new FormControl(''),
        password: new FormControl(''),
        preferences: new FormGroup({
            receiveEmails: new FormControl(''),
        }),
    });

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.loadUserSettings();
    }

    loadUserSettings() {
        const userToken = localStorage.getItem('token');
        if (!userToken) {
            this.errorMessage = 'User not authenticated';
            this.loading = false;
            this.router.navigate(['/login']);
        } else {
            // Simulating settings data fetch (replace with actual API call)
            this.user = {
                email: 'user@example.com',
                name: 'John Doe',
                password: 'password123',
                preferences: {
                    receiveEmails: true,
                },
            };
            this.loading = false;
        }
    }

    saveSettings() {
        // Replace with API call to save user settings
        console.log('Settings saved:', this.user);
    }
}
