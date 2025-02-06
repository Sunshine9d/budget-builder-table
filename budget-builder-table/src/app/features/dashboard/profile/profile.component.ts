import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: false,
})
export class ProfileComponent implements OnInit {
    user: any; // Store user details here
    loading = true;
    errorMessage: string | null = null;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        return;
        this.loadUserProfile();
    }

    loadUserProfile() {
        // Replace with API call to load user profile
        const userToken = localStorage.getItem('token');
        if (!userToken) {
            this.errorMessage = 'User not authenticated';
            this.loading = false;
            this.router.navigate(['/login']);
        } else {
            // Simulating a profile data fetch (replace with actual API call)
            this.user = {
                email: 'user@example.com',
                name: 'John Doe',
                role: 'Admin',
            };
            this.loading = false;
        }
    }
}
