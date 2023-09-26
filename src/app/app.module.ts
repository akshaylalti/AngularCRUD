import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { ContactManegerComponent } from './component/contact-maneger/contact-maneger.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    EditContactComponent,
    AddContactComponent,
    ViewContactComponent,
    ContactManegerComponent,
    PageNotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
