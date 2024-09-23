import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './register/register.component';
import { FaqComponent } from './faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FarmerProfileComponent } from './view-farmers-profile/view-farmers-profile.component';
import { ContactFarmerDialogComponent } from './contact-farmer-dialog/contact-farmer-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TradeComponent } from './trade/trade.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    ViewContractComponent,
    RegisterComponent,
    FaqComponent,
    FarmerProfileComponent,
    ContactFarmerDialogComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,         
    BrowserAnimationsModule,  
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,      
    FormsModule,            
    ReactiveFormsModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  