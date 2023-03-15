import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent {

  @Output() closeStatusForListPage = new EventEmitter<boolean>();

  handleModuleClose() {
    console.log("Hello World");
    this.closeStatusForListPage.emit(false)
  }
}
