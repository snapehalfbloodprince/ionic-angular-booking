import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute, private placesService: PlacesService, private modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place= this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalController.create({component:CreateBookingComponent, 
      componentProps: {selectedPlace:this.place}}).then(modalEl=>{
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData=>{
      console.log(resultData.data, resultData.role);
      if(resultData.role==='confirm'){
        console.log('BOOKED!');
      }
    });
  }

}
