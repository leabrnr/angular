import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiModule } from './api_swagger/api.module'; 
import { HttpClientModule } from '@angular/common/http';
import { BurgerListComponent } from './burger-list/burger-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BurgerDetailComponent } from './burger-detail/burger-detail.component';
import { MatListModule } from '@angular/material/list';

 @NgModule({
  declarations: [
    AppComponent,
    BurgerListComponent,
    BurgerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
