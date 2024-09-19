import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';  // Import ContactComponent
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },   // Home route
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },  // Contact route
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }  // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
