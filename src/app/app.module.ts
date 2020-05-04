import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiModule } from './api_swagger/api.module'; 
import { HttpClientModule } from '@angular/common/http';
import { BurgerListComponent } from './burger-list/burger-list.component';


 @NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
