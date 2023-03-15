import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent {

  data!: any

  constructor(private dataService: DataServiceService) {
    this.dataService.dataInfo().subscribe((ele: any) => {
      this.data = ele.data
      console.log("Getting Data:", this.data, ele)
    })
  }

  isSelected: boolean = false;
  isSelectedForListPage: boolean = false;
  isSelectedForCardModel: boolean = false;

  @Output() closeStatusForListPage = new EventEmitter<boolean>();

  handleModuleClose() {
    console.log("Hello World");
    this.closeStatusForListPage.emit(false)
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

  handleCardModel() {
    this.isSelectedForCardModel = true;
  }
}
