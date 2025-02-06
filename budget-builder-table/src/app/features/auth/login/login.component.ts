import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false,
})
export class LoginComponent {
    loginForm: FormGroup;
    loading = false;
    errorMessage: string | null = null;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit() {
        if (this.loginForm.invalid) return;

        this.loading = true;
        this.errorMessage = null;

        this.authService.login1(this.loginForm.value).subscribe({
            next: (res: any) => {
                this.authService.saveTokens(res.token, res.refreshToken);
                this.router.navigate(['/dashboard']); // Redirect after login
            },
            error: (err: any) => {
                this.errorMessage = err.error?.message || 'Login failed!';
                this.loading = false;
            },
        });
    }
}
