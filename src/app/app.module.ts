import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { CardsComponent } from './cards/cards.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ListgroupComponent } from './listgroup/listgroup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    JumbotronComponent,
    SpinnersComponent,
    CardsComponent,
    AlertsComponent,
    ListgroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
