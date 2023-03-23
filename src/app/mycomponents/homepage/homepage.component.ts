import { Component, OnInit } from '@angular/core';
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
    this.isSelectedForListPage = reply
  }

  handleStatusForLisPage(reply: boolean) {
    this.isSelectedForListPage = reply
  }


}
