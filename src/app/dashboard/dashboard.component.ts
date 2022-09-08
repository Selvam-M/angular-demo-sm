import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = 'this is variable data type string in interpolation';

  enteredName: string = 'selvam';

  displayValue: string = '';

  showelement: boolean = true;

  numbers: number[] = [10, 20, 30, 40, 50];

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(event: string): void {
    this.displayValue = event;
  }

  onclickshowdiv():void {
    this.showelement = !this.showelement;
  }

}
