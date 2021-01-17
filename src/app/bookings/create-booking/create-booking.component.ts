import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onBookPlace(){
    this.modalController.dismiss({message:"Dummy message"}, 'confirm');
  }

  onCancelBooking(){
    this.modalController.dismiss(null,'cancel');
  }

}
