# budget-builder-table

1. Project Folder Structure
budget-builder-table/
│── src/
│   ├── app/
│   │   ├── core/               # Core module (Singleton Services, Guards, Interceptors)
│   │   │   ├── services/       # Global Services (Auth, API, Storage, etc.)
│   │   │   ├── guards/         # Route Guards (AuthGuard, RoleGuard)
│   │   │   ├── interceptors/   # HTTP Interceptors (JWT, Error Handling)
│   │   │   ├── core.module.ts  # Core Module
│   │   │   ├── core-routing.module.ts # Core Routing
│   │   │   ├── index.ts        # Barrel Export
│   │   │   ├── auth.service.ts # Authentication Service
│   │   ├── shared/             # Shared module (Reusable Components, Pipes, Directives)
│   │   │   ├── components/     # UI Components (Header, Footer, Sidebar)
│   │   │   ├── directives/     # Custom Directives
│   │   │   ├── pipes/          # Custom Pipes (Date Formatter, Currency)
│   │   │   ├── shared.module.ts # Shared Module
│   │   │   ├── index.ts        # Barrel Export
│   │   ├── features/           # Feature Modules (Lazy Loaded)
│   │   │   ├── auth/           # Authentication Module
│   │   │   │   ├── login/      # Login Component
│   │   │   │   ├── register/   # Register Component
│   │   │   │   ├── auth.module.ts
│   │   │   ├── dashboard/      # Dashboard Module
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.module.ts
│   │   ├── app.component.ts    # Root Component
│   │   ├── app.module.ts       # Root Module
│   │   ├── app-routing.module.ts # Root Routing Module
│   ├── assets/                 # Static Assets (Images, JSON, Fonts)
│   ├── environments/           # Environment Configurations
│   ├── styles/                 # Global SCSS Styles
│── angular.json                # Angular Configuration
│── package.json                # Dependencies and Scripts
│── tsconfig.json                # TypeScript Configuration
