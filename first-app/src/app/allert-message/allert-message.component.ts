import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allert-message',
  templateUrl: './allert-message.component.html',
  styleUrls: ['./allert-message.component.css']
})
export class AllertMessageComponent implements OnInit {
  alertMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.alertMessage = "base message";
  }

}
