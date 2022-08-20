import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AboutComponent} from './components/about/about.component';
import {MainComponent} from './components/main/main.component';
import {EconomyComponent} from './components/economy/economy.component';
import {DepositComponent} from './components/deposit/deposit.component';
import {PurchaseComponent} from './components/purchase/purchase.component';
import {IncomeComponent} from './components/income/income.component';
import {SuffixPipe} from './shared/pipes/suffix.pipe';
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LeftSidenavComponent } from './shared/components/left-sidenav/left-sidenav.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    EconomyComponent,
    DepositComponent,
    PurchaseComponent,
    IncomeComponent,
    SuffixPipe,
    LeftSidenavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
