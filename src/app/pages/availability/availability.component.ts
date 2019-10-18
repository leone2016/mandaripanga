import { Component, OnInit } from '@angular/core';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  foods: Food[] = [
    {value: '1', viewValue: 'ALL'},
    {value: '2', viewValue: 'KAYAK'},
    {value: '3', viewValue: 'STANDARD'}
  ];
  years: Food[] = [
    {value: '1', viewValue: '2019'},
    {value: '2', viewValue: '2020'},
    {value: '3', viewValue: '2021'}
  ];
  selected = '2';
  value: Date;
  constructor() { }

  ngOnInit() {
  }

}
