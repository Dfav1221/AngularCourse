import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = false;
  iterator:number = 0;
  buttonsClicks: number[] = [];

  changeVisibility() {
    this.isVisible = !this.isVisible;
    this.iterator += 1;
    this.buttonsClicks.push(this.iterator);
  }

  getColor(it:number) {
    return it >= 5 ? 'green' : '';
  }
}
