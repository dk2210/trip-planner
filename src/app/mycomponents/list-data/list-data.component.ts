import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent {
handleBgcChange($event: Event) {
throw new Error('Method not implemented.');
}

  data!: any
  cardData!: any
  placeName!: string

  constructor(private dataService: DataServiceService, private imageService: ImageServiceService) {
    this.dataService.dataInfo()
      .subscribe((ele: any) => {
        this.data = ele.data
        console.log("Getting Data:", this.data, ele)
      })
  }

  isSelected: boolean = false;
  isSelectedForListPage: boolean = false;
  isSelectedForCardModel: boolean = false;
  isSelectedAddPage: boolean = false
  imageUrl!: string
  handleisListPageSelected: boolean= true;

  @Output() closeStatusForListPage = new EventEmitter<boolean>();
  
  handleModuleClose() {
    console.log("Hello World");
    this.closeStatusForListPage.emit(false)
  }

  handleStatus(reply: boolean) {
    this.isSelectedAddPage = reply;
    console.log("I am testing")
  }

  statusChanged(reply: boolean) {
    this.isSelectedAddPage = reply;
    console.log("Status changed",reply);
    this.isSelectedForListPage = reply
  }

  handleStatusForListPage(reply: boolean) {
    this.isSelectedForListPage = reply;
    this.handleisListPageSelected = true;
  }

  handleCardModel(id: string) {
    this.isSelectedForCardModel = true;
    this.dataService.dataOneInfo(id)
      .subscribe((ele: any) => {
        // this.data = ele;
        this.cardData = ele.data;
        this.placeName = ele.data.city
        this.imageService.getImage(this.placeName).subscribe((data: any) => {
          console.log("Getting Image data:", data.hits[0].largeImageURL);
          this.imageUrl = data.hits[0].largeImageURL
        })
      })
    console.log(this.imageUrl);
  }



  cardModelClose(reply: boolean) {
    console.log("Replying:", reply);
    this.isSelectedForCardModel = reply;
  }


}
