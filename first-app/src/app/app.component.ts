import {Component, Input} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() usersClicked: {number:number};

  constructor(usersService:UsersService) {
      this.usersClicked = usersService.usersSwapCount;
  }


}
