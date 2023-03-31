import { Component, OnInit, HostListener } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isSelected: boolean = false;
  isSelectedForListPage: boolean = false;
  handleisHomePageSelected: boolean = true;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
        // element.style.position = "sticky";
        element.style.width = '100%';
        element.style.backgroundColor = '#fff';
        element.style.zIndex= '1000';
        element.style.top = '0';
        element.style.opacity = '1';
        console.log(' I am one')
      } else {
        element.classList.remove('navbar-inverse');
        console.log(' I am two');
        element.style.opacity='0.5'
      }
    }

  constructor(private dataService: DataServiceService) {

    this.dataService.dataInfo()
      .subscribe((ele) => {
        console.log("GEtting Data:", ele)
      })

  }

  ngOnInit() {
    console.log("Status ias Changed: ", this.isSelected)
  }

  handleStatus(reply: boolean) {
    this.isSelected = reply;
  }

  statusChanged(reply: boolean) {
    this.isSelected = reply;
    this.isSelectedForListPage = reply;
  }

  handleStatusForLisPage(reply: boolean) {
    this.isSelectedForListPage = reply
  }


}
