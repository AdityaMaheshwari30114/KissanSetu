import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';  // Import ContactComponent
import { LoginComponent } from './login/login.component';
import { FarmersComponent } from './farmers/farmers.component';
import { BuyersComponent } from './buyers/buyers.component';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
const routes: Routes = [
  { path: '', component: HomeComponent },   
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'FaqComponent', component: FaqComponent },
  { path: 'farmers', component: FarmersComponent },
  { path: 'buyers', component: BuyersComponent },
  { path: 'view-contract', component: ViewContractComponent },
  { path: '**', redirectTo: '' }  // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
