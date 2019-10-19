import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {OptionsComponent} from '../options/options.component';
export interface Car {
  itinerario?;
  available?;
  hold?;
  conf?;
  price?;
  saleDate?;
}
@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MonthComponent implements OnInit {
  cars: any[];
  spaces: any[];

  cols: any[];
  cols2: any[];
  constructor(private http: HttpClient, private _bottomSheet: MatBottomSheet) { }



  openBottomSheet(): void {
    this._bottomSheet.open(OptionsComponent);
  }
  ngOnInit() {
    this.getCarsSmall().then(cars => this.cars = cars);
    this.getSpace().then(spaces => this.spaces = spaces);

    this.cols = [
      { field: 'itinerario', header: 'Departure' },
      { field: 'available', header: 'Available' },
      { field: 'hold', header: 'Hold' },
      { field: 'conf', header: 'Conf' }
    ];
    // {"space_number": "1A",
    // "capacity": 2,
    // "rate_person": "US$ 550",
    // "promotion": "NO PROMO",
    // "status": "Available","color":
    // "#73ec7f","rack": "US$ 500",
    //   "code": 1
    // },
    this.cols2 = [
      { field: 'space_number', header: 'Number' },
      { field: 'status', header: 'Status' },
      { field: 'capacity', header: 'Capacity' },
      { field: 'rack', header: 'Rack' },
      { field: 'promotion', header: 'Promotion' },
      { field: 'rate_person', header: 'Rate Person' }
    ];
  }

  getCarsSmall() {
    return this.http.get<any>('assets/cars-small.json')
      .toPromise()
      .then(res => <any[]> res.data)
      .then(data => { return data; });
  }
  getSpace() {
    return this.http.get<any>('assets/espacios.json')
      .toPromise()
      .then(res => <any[]> res.data)
      .then(data => { return data; });
  }
}
