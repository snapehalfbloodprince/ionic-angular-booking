import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingsService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }
  onCancelBooking(bookingId: string, slidingBooking: IonItemSliding){
    slidingBooking.close();
    console.log(bookingId);
  }

}
