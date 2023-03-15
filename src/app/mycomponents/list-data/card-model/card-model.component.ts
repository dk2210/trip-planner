import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.css']
})
export class CardModelComponent {

  @Output() closeCardModel = new EventEmitter<boolean>();
  handleModuleClose() {
    this.closeCardModel.emit(false);
  }
}
