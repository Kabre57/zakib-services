import { Routes } from '@angular/router';

import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [

    { path: '', component: HomeComponent, }, 

    { path: '**', component: NotFoundComponent }
];
