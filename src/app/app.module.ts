import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CrudMarcaComponent } from './components/crud-marca/crud-marca.component';
import { InformationComponent } from './components/information/information.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudMarcaComponent,
    InformationComponent,
    HomeComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
