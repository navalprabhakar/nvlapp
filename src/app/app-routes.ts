import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];