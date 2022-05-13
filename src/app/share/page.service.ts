import { Injectable } from '@angular/core';
import { Mockflight } from './mockflight'
import { Flight } from '../component/flight/data';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  flights: Flight[] = []
  constructor() {
    this.flights = Mockflight.mFlight
  }

  getPages(){
    return this.flights
  }

  addFlight(f:Flight){
    this.flights.push(f)
  }
}
