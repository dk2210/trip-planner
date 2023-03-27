import { Component, OnInit, HostListener } from '@angular/core';
import { placeData } from 'src/Type';
import { PreferenceDataService } from 'src/app/services/preference-data.service';

@Component({
  selector: 'app-preference-page',
  templateUrl: './preference-page.component.html',
  styleUrls: ['./preference-page.component.css'],
})
export class PreferencePageComponent implements OnInit  {

  constructor( private prefrenceData : PreferenceDataService) {
    this.prefrenceData.getPreferenceData().subscribe( (ele:any) => {
      console.log("ELements:", ele)
      this.placeDataArr = ele.data;
    })
  }

  isSelected: boolean = false;
  isSelectedForListPage: boolean =false;
  placeDataArr: placeData[] = [];
  handleisPreferencePageSelected: boolean = true;

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      // element.style.position = 'sticky';
      element.style.width = '100%';
      element.style.backgroundColor = '#fff';
      element.style.zIndex= '1000';
      element.style.top = '0';
      element.style.opacity = '1';
      console.log(' I am one')
    } else {
      element.classList.remove('navbar-inverse');
      console.log(' I am two');
      element.style.opacity='0.7'
    }
  }

  ngOnInit(): void {
 
    this.prefrenceData.getPreferenceData().subscribe( (ele:any) => {
      console.log("ELements:", ele)
      this.placeDataArr = ele.data;
    })

  }

  handleStatus(reply: boolean) {
    this.isSelected = reply;
  }

  handleStatusForLisPage(reply: boolean) {
    this.isSelectedForListPage = reply;
  }

  statusChanged(reply: boolean) {
    this.isSelected = reply;
    this.isSelectedForListPage = reply
  }


}
