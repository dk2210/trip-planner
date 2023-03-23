import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  @Output() closeStatus = new EventEmitter<boolean>();
  @Output() closeStatusForListPage = new EventEmitter<boolean>();
  @Input() handleisListPageSelectedTag!:boolean;
  @Input() handleisHomePageSelectedTag!: boolean;
  @Input() handleisPreferencePageSelectedTag!: boolean;

  isSelected: boolean = false;


  handleClick() {
    // this.router.navigate(['/'])
    this.closeStatus.emit(true);
  }

  handleClickForListPage() {
    this.closeStatusForListPage.emit(true);
    this.router.navigate(['/list-data']);
    this.isSelected= false;
  }

  handleClickForHomePage() {
    this.router.navigate(['/']);
  }

  handlePreferencePage() {
    this.router.navigate(['/preference']);
  }

  handleBgcChange(reply: boolean){
    console.log("BGC chnaging:", reply);
  }
}
