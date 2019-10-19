import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
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
  cars: Car[];

  cols: any[];
  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.data)
      .then(data => { return data; });
  }
  ngOnInit() {
    this.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [
      { field: 'itinerario', header: 'Itinerario' },
      { field: 'available', header: 'Available' },
      { field: 'hold', header: 'Hold' },
      { field: 'conf', header: 'Conf' }
    ];
  }
}
