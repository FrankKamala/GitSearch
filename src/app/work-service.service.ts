import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {
  // user:User;
  private username = "FrankKamala";
    _URL = 'https://api.github.com/users/';
    token = '?access_token=d88ee8d7b4f4a19b94690ceea2231cb316dfe82e';
//

  constructor(private http:HttpClient) {

  }
  getUserInfo(){
    return this.http.get(this._URL +this.username).pipe(map(res => res));

  }
  getRepoInfo(){
    return this.http.get(this._URL +this.username + '/repos?').pipe(map(res => res));

  }
  updateUser(username:string){
    this.username = username;
  }

}
