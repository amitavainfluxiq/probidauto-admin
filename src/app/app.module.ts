import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DemoMaterialModule} from '../app/material-module';

import { MetaModule } from '@ngx-meta/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ListingModule} from "listing-angular7";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    DashboardComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,MetaModule.forRoot(), BrowserAnimationsModule,
    ListingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
