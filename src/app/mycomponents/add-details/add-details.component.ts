import { animate, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { Data } from '../../../Type';
import { DataServiceService } from 'src/app/services/data-service.service';



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

  constructor(private dataService: DataServiceService) { }
  @Output() changeStatus = new EventEmitter<boolean>();
  // isForm1: boolean = true;
  // isForm2: boolean = false;
  // isForm1: boolean = false;
  // isForm2: boolean = true;
  isForm1: boolean = true;
  isForm2: boolean = false;
  isForm3: boolean = false;
  isDataContiner: boolean = false;


  data!: Partial<Data>
  city: string = "";
  start_date: string = "";
  end_date: string = "";
  budget: string = "";
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
      this.isForm2 = true;
      this.isForm3 = false;
      this.isDataContiner = false;
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
      this.isDataContiner = false;
    }
  }

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
      this.isDataContiner = false;
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
      this.dataService.addData(this.data).subscribe();
      this.isForm1 = false;
      this.isForm2 = false;
      this.isForm3 = false;
      this.isDataContiner = true;

    }
  }

  handleClickforComplition() {

  }
}

