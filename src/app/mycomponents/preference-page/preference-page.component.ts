import { Component, OnInit, HostListener } from '@angular/core';
import { placeData } from 'src/Type';

@Component({
  selector: 'app-preference-page',
  templateUrl: './preference-page.component.html',
  styleUrls: ['./preference-page.component.css'],
})
export class PreferencePageComponent implements OnInit  {

  isSelected: boolean = false;
  isSelectedForListPage: boolean =false;
  placeDataArr: placeData[] = [];
  handleisPreferencePageSelected: boolean = true;

  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      // element.style.position = 'sticky';
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

  ngOnInit(): void {
    this.placeDataArr = [
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh09DqSWnR80EN37QeXTrbSoAwaGnRvUeeA&usqp=CAU',
        title: 'KASOL + MANALI',
        decription: 'Kasol is a small village located in the Parvati Valley of the Kullu district in the Indian state of Himachal Pradesh. It is situated on the banks of the Parvati River, at an altitude of about 1,580 meters above sea level. The village is known for its natural beauty, scenic landscapes, and pleasant weather.',
        food: ["local", "restaurent", "banquet"],
        accomodation: ["hotel", "campingsite"],
        travelling: ["bus", "local"],
        rating: '★★★☆☆',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh09DqSWnR80EN37QeXTrbSoAwaGnRvUeeA&usqp=CAU',
        title: 'KASOL + MANALI',
        decription: 'Kasol is a small village located in the Parvati Valley of the Kullu district in the Indian state of Himachal Pradesh. It is situated on the banks of the Parvati River, at an altitude of about 1,580 meters above sea level. The village is known for its natural beauty, scenic landscapes, and pleasant weather.',
        food: ["local", "restaurent", "banquet"],
        accomodation: ["hotel", "campingsite"],
        travelling: ["bus", "local"],
        rating: '★★★☆☆',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh09DqSWnR80EN37QeXTrbSoAwaGnRvUeeA&usqp=CAU',
        title: 'KASOL + MANALI',
        decription: 'Kasol is a small village located in the Parvati Valley of the Kullu district in the Indian state of Himachal Pradesh. It is situated on the banks of the Parvati River, at an altitude of about 1,580 meters above sea level. The village is known for its natural beauty, scenic landscapes, and pleasant weather.',
        food: ["local", "restaurent", "banquet"],
        accomodation: ["hotel", "campingsite"],
        travelling: ["bus", "local"],
        rating: '★★★☆☆',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh09DqSWnR80EN37QeXTrbSoAwaGnRvUeeA&usqp=CAU',
        title: 'KASOL + MANALI',
        decription: 'Kasol is a small village located in the Parvati Valley of the Kullu district in the Indian state of Himachal Pradesh. It is situated on the banks of the Parvati River, at an altitude of about 1,580 meters above sea level. The village is known for its natural beauty, scenic landscapes, and pleasant weather.',
        food: ["local", "restaurent", "banquet"],
        accomodation: ["hotel", "campingsite"],
        travelling: ["bus", "local"],
        rating: '★★★☆☆',
      },
      {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh09DqSWnR80EN37QeXTrbSoAwaGnRvUeeA&usqp=CAU',
        title: 'KASOL + MANALI',
        decription: 'Kasol is a small village located in the Parvati Valley of the Kullu district in the Indian state of Himachal Pradesh. It is situated on the banks of the Parvati River, at an altitude of about 1,580 meters above sea level. The village is known for its natural beauty, scenic landscapes, and pleasant weather.',
        food: ["local", "restaurent", "banquet"],
        accomodation: ["hotel", "campingsite"],
        travelling: ["bus", "local"],
        rating: '★★★☆☆',
      }
    ]
  }

  handleStatus(reply: boolean) {
    this.isSelected = reply;
  }

  handleStatusForLisPage(reply: boolean) {
    this.isSelectedForListPage = reply;
  }

  statusChanged(reply: boolean) {
    this.isSelected = reply;
    this.isSelectedForListPage = reply
  }


}
