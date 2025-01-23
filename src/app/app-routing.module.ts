import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }, 
  { path: 'accueil', component: HomeComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'accueil' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
