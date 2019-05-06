import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {FirebaseService} from './service/firebase.service';
import {environment} from '../environments/environment';
import * as firebase from "firebase";

import {Camera} from '@ionic-native/camera/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, AngularFireStorageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    FirebaseService,
    Camera,
    Geolocation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy} ],
    bootstrap: [AppComponent],

})

export class AppModule {}
