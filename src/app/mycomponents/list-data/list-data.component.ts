import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
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
  
  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
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
