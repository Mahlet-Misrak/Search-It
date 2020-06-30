import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatepickerModule } from 'ng-uikit';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})

export class FlightComponent implements OnInit {
  public myDatePickerOptions: DatepickerModule = {
  // Your options
  };
  datePickerForm: FormGroup;

  ngOnInit() {
    const departureDatePickerControl = {date: {year: 2019, month: 5, day: 8}};
    this.datePickerForm = new FormGroup({
      datePickerControl: new FormControl(departureDatePickerControl)
    });
    const returnDatePickerControl = {date: {year: 2019, month: 5, day: 8}};
    this.datePickerForm = new FormGroup({
      datePickerControl: new FormControl(returnDatePickerControl)
    });
  }
}
