import { Component, OnInit } from '@angular/core';
import {WorkServiceService} from'../work-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile:any;
  constructor( private service:WorkServiceService  ) {
  this.service.getUserInfo().subscribe(profile =>{
    console.log(profile);
    this.profile = profile;
  });
  }

  ngOnInit() {
  }

}
