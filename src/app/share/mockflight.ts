import { Flight } from "../component/flight/data"
export class Mockflight {
  public static mFlight: Flight[] = [
    {
      fullName: 'T',
      from: 'รัสเซีย',
      to: 'ยูเครน',
      type: 'Return',
      adults: 10,
      departure: new Date('03-04-2565'),
      children: 5,
      infants: 7,
      arrival: new Date('03-05-2565')
    }
  ]
}
