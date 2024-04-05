import { Routes } from '@angular/router';
import { ContactComponent, HomeComponent } from './pages';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "contato", component: ContactComponent}
];
