import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isSelected: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("Status ias Changed: ", this.isSelected)
  }

  handleStatus(reply: boolean) {
    this.isSelected = reply;
  }

  statusChanged(reply: boolean) {
    this.isSelected = reply;
  }


}
