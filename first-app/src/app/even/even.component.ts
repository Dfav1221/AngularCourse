import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

  constructor() {
  }

  numbers: number[] = [];
  @Input() newNumber: number;

  ngOnInit() {
  }

  ngOnChanges() {
    this.numbers.push(this.newNumber);
  }


}
