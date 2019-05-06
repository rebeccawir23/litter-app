import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import 'rxjs-compat/add/operator/map';
import { Observable } from 'rxjs-compat/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  constructor(private router: Router) {
     }

  ngOnInit() {
  }
  loadMapPage(){
    this.router.navigate(['../badge']);
  }
}
