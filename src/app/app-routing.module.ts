import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {AboutComponent} from "./components/about/about.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {DepositComponent} from "./components/deposit/deposit.component";
import {EconomyComponent} from "./components/economy/economy.component";
import {PurchaseComponent} from "./components/purchase/purchase.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'economy', component: EconomyComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
