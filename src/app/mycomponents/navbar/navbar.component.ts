import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private route: Router) { }

  @Output() closeStatus = new EventEmitter<boolean>();

  isSelected: boolean = false;

  handleClick() {
    this.closeStatus.emit(true);
  }


}
