import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumberAdded = new EventEmitter<number>();
  @Output() evenNumberAdded = new EventEmitter<number>();
  oddNumber:number;
  evenNumber:number;
  counter = 0;
  intervalId: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStart() {

    this.intervalId = setInterval(() => {
      this.counter += 1;
      if (this.counter % 2 === 0) {
        this.evenNumber = this.counter;
      } else {
        this.oddNumber = this.counter;

      }
    }, 1000)
  }

  onGameStop() {
    clearInterval(this.intervalId);
  }
}
