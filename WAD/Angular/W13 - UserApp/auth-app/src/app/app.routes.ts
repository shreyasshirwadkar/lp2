import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    {path: "login", component: LoginComponent},
    {path : "register",component: RegisterComponent},
    {path:"profile",component: ProfileComponent}    
];
