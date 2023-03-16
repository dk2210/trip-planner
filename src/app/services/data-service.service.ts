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

  dataOneInfo(id: string) {
    return this.http.get(this.baseUrl + `list-data/` + id);
  }

  addData(data: any) {
    console.log("Getting Data", data)
    return this.http.post(this.baseUrl + 'post-data', data)
  }

}
