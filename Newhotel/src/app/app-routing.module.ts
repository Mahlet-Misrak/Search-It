import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarComponent} from './car/car.component';
import { from } from 'rxjs';
import { HotelComponent} from './hotel/hotel.component';
import { TourTravelComponent } from './tour-travel/tour-travel.component';
import {FlightComponent} from './flight/flight.component';
import { AttractionComponent } from './attraction/attraction.component';
const routes: Routes = [
  { path: '',
    pathMatch: 'full',
   component: HomeComponent},
   { path: 'home',
   component: HomeComponent},
  { path: 'flight',
   component: FlightComponent},
  { path: 'tour-travel', component: TourTravelComponent},
  { path: 'car', component: CarComponent},
  { path: 'attraction', component: AttractionComponent},
  { path: 'hotel', component: HotelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
