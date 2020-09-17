import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,AppRoutingModule
    ,FormsModule
    ,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
