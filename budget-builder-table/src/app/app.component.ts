import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from './shared/shared.module';

@Component({
    selector: 'app-root',
    // imports: [RouterOutlet, SharedModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false,
})
export class AppComponent {
    title = 'budget-builder-table';

    constructor() {
        console.log('app component initialized');
    }
}
