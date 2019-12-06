import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {



  constructor(private http:HttpClient) {
    alert("Service is Ready");
  }
}
