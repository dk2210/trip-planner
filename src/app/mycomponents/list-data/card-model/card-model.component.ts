import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.css']
})
export class CardModelComponent implements OnInit {
  @Input() cardData!: any
  @Input() placeName!: any

  imageUrl!: string

  constructor(private imageService: ImageServiceService) {
  }
  ngOnInit(): void {
    this.imageService.getImage(this.placeName).subscribe((data: any) => {
      console.log("Getting Image data:", data.hits[0].largeImageURL);
      this.imageUrl = data.hits[0].largeImageURL
    })
  }

  @Output() closeCardModel = new EventEmitter<boolean>();

  handleModuleClose() {
    this.closeCardModel.emit(false);
  }


}
