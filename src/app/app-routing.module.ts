import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManegerComponent } from './component/contact-maneger/contact-maneger.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';

const routes: Routes = [
  { path: '',   redirectTo: 'contacts/admin', pathMatch: 'full'},
  { path:'contacts/admin',component:ContactManegerComponent},
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:contactId', component: EditContactComponent},
  { path: 'contacts/view/:contactId', component: ViewContactComponent},
  { path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
