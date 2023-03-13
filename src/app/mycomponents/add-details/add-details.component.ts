import { animate, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Data } from '../../../Type'


@Component({
  selector: 'app-add-details',
  templateUrl: 'add-details.component.html',
  styleUrls: ['add-details.component.css'],
  // animations: [
  //   trigger('useMe', [
  //     transition("void  => *",[
  //       style({ backGround}),
  //       animate()
  //     ])
  //   ])
  // ]
})
export class AddDetailsComponent {
  @Output() changeStatus = new EventEmitter<boolean>();
  // isForm1: boolean = true;
  // isForm2: boolean = false;
  // isForm1: boolean = false;
  // isForm2: boolean = true;
  isForm3: boolean = true;
  isForm2: boolean = false;
  isForm1: boolean = false;


  data!: Partial<Data>
  city: string = "";
  start_date: string = "";
  end_date: string = "";
  budget: number = 0;
  currency: string = "";
  travelling: string = "";
  accomodation: string = "";
  food: string = ""


  handleModuleClose() {
    console.log("Hello World");
    this.changeStatus.emit(false)
  }

  handleForm1Submit() {
    if (!this.city || !this.start_date || !this.end_date) {
      alert("Please fill the required field!")
    } else {
      this.data = {

      }
      this.isForm1 = false;
      this.isForm2 = true;
      this.isForm3 = false
    }
  }

  handleForm2Submit() {
    if (!this.budget || !this.currency || !this.travelling) {
      alert("Please fill the required field!")
    } else {
      this.data = {
        city: this.city,
        date: {
          start_date: this.start_date,
          end_date: this.end_date,
        },
        budget: this.budget,
        currency: this.currency,
        travelling: this.travelling,
        accomodation: this.accomodation,
        food: this.food,
      }
      this.isForm1 = false;
      this.isForm2 = false;
      this.isForm3 = true;
    }
    console.log("Getting budget:", this.travelling)
  }

  // handleForm3Submit() {
  //   if (!this.accomodation || !this.food) {
  //     alert("Please fill the required field!")
  //   } else {
  //     this.data = {
  //       accomodation: this.accomodation,
  //       food: this.food,
  //     }
  //   }

  //   this.isForm1 = false;
  //   this.isForm2 = false;
  //   this.isForm3 = false;
  // }

  handleFormBack(formNO: number) {
    if (formNO == 1) {
      this.isForm1 = true
      this.isForm2 = false;
      this.isForm3 = false;
    } else if (formNO == 2) {
      this.isForm1 = true
      this.isForm2 = false;
      this.isForm3 = false;
    } else if (formNO == 3) {
      this.isForm1 = false;
      this.isForm2 = true
      this.isForm3 = false;
    }
  }

  handleSubmit() {
    if (!this.accomodation || !this.food) {
      alert("Please fill the required field!")
    } else {
      this.data = {
        city: this.city,
        date: {
          start_date: this.start_date,
          end_date: this.end_date,
        },
        budget: this.budget,
        currency: this.currency,
        travelling: this.travelling,
        accomodation: this.accomodation,
        food: this.food,
      }
    }
    console.log("Getting Data: ", this.data)
    // this.isForm1 = false;
    // this.isForm2 = false;
    // this.isForm3 = false;
  }
}

