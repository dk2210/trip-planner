import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreferenceDataService {

  baseUrl: string = 'http://localhost:8000'

  constructor( private http : HttpClient) { }

  getPreferenceData(){
    console.log(" iam from prefrence service")
    return this.http.get(`${this.baseUrl}/prefrence-data`);
  }
}
