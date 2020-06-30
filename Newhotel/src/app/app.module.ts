
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule} from './shared/material-design.module';
import { NgxModuleModule} from './shared/ngx-module.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AttractionComponent } from './attraction/attraction.component';
import { CarComponent } from './car/car.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { TourTravelComponent } from './tour-travel/tour-travel.component';



@NgModule({
  declarations: [
    AppComponent,
    AttractionComponent,
    CarComponent,
    FlightComponent,
    HomeComponent,
    HotelComponent,
    TourTravelComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    MaterialDesignModule,
    NgxModuleModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    SharedModule,
    MDBBootstrapModule
   ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
