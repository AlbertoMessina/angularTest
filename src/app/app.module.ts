import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule, routesComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitService } from './services/fruit-service.service';
import { GreengrocerService } from './services/greengrocer-service.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FruitService, GreengrocerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
