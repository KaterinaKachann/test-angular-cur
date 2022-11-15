import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUsdComponent } from './header-usd/header-usd.component';
import { HeaderEurComponent } from './header-eur/header-eur.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    HeaderComponent,
    HeaderUsdComponent,
    HeaderEurComponent
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
