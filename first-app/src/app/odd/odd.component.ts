import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit,OnChanges {

  constructor() { }
  numbers:number[] = [];
  @Input() newNumber:number;

  ngOnChanges(){
    this.numbers.push(this.newNumber);
  }
  ngOnInit(): void {
  }

}
