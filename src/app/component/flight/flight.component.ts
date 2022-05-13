import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from './data';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight !: Flight[]
  flightForm !: FormGroup
  startDate: Date

  constructor(private form: FormBuilder , public service: PageService) {
    this.startDate = new Date(Date.now())
    this.flightForm = this.form.group({
      fullName: ['', Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      type: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      adults: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
      children: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
      infants: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]]
    })
   }

  ngOnInit(): void {
    this.getPages()
  }

  getPages(){
    this.flight = this.service.getPages()
  }

  onSubmit(f:Flight): void{
    if(f.from == f.to) return alert("no!")
    const yDepart = f.departure.getFullYear() + 543
    const yArri = f.departure.getFullYear() + 543
    f.departure = new Date((f.departure.getMonth()+1)+'/'+ f.departure.getDate()+'/'+yDepart)
    f.arrival = new Date((f.arrival.getMonth()+1)+'/'+ f.arrival.getDate()+'/'+yArri)
    this.service.addFlight(f)
  }
}
