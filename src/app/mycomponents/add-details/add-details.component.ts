import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent {

  @Output() changeStatus = new EventEmitter<boolean>();

  handleModuleClose() {
    console.log("Hello World");
    this.changeStatus.emit(false)
  }
}
