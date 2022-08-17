import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
