import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component'

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'moments/new', component: NewMomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
