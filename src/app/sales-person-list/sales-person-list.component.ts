import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Chirstian", "Bale", "bale@123.com", 50000),
    new SalesPerson("John", "Rogers", "rogers@123.com", 60000),
    new SalesPerson("Sam", "Mendez", "medez@123.com", 70000),
    new SalesPerson("Chris", "Evans", "even@123.com", 80000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
