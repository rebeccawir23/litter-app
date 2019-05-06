import { Component, OnInit } from '@angular/core';
import {Location} from '../../models/location.model';
import {FirebaseService} from '../../service/firebase.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
public base64Image: string;
location: Location = {
  content:'',
  latitude: 0,
  longitude: 0,
  title: '',
  picture: ''
}
  constructor(private geolocation: Geolocation, private camera: Camera, public firebaseService:FirebaseService) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(pos => {
      this.location.latitude = pos.coords.latitude;
      this.location.longitude = pos.coords.longitude;
    });

  }

  addLocation(location: Location) {
    this.firebaseService.addLocation(location);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((ImageData) => {
      this.base64Image = "data:image/jpeg;base64," + ImageData;
      this.location.picture = this.base64Image;
    }, (error) => {

    }
    )
    };
  }


