import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  baseUrl: string = 'http://localhost:8000/'


  constructor(private http: HttpClient) { }

  dataInfo() {
    return this.http.get(this.baseUrl)
  }

}
