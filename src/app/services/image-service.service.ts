import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  baseUrl: string = 'https://pixabay.com/api/?key=34391699-943d376a320b772531c446c70&orientation=horizontal&q=';

  constructor(private http: HttpClient) { }

  getImage(placeName: string) {
    console.log("Getting place name in image service:", placeName)
    return this.http.get(this.baseUrl + placeName)
  }

}
