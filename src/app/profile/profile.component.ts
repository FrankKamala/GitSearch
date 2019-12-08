import { Component, OnInit } from '@angular/core';
import {WorkServiceService} from'../work-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile:any;
 repos:any;
 username:string;
  constructor( private service:WorkServiceService  ) {
  this.service.getUserInfo().subscribe(profile =>{
    console.log(profile);
    this.profile = profile;
  });
  this.service.getRepoInfo().subscribe(repos =>{
    console.log(repos);
    this.repos = repos;
  })
  }
  findProfile(){
    this.service.updateUser(this.username);
  }

  ngOnInit() {
  }

}
