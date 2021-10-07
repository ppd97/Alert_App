import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';

// Services
import { WeatherServices } from './services/weather.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertListComponent } from './alert-list/alert-list.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AlertListComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    
  ],
  providers: [
    WeatherServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
