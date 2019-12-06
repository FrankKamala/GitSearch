import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {
  user: User[] = [];
    _URL = 'https://api.github.com/users/';
    token = '?access_token=d88ee8d7b4f4a19b94690ceea2231cb316dfe82e';
//

  constructor(private http:HttpClient) {
    alert("Service is Ready");
  }
}
