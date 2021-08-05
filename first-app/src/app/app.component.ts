import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit{
  accounts:{name:string,status:string}[] = []

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }

  onStatusChanged($event: { id: number; newStatus: string }) {
    
  }

  onAccountAdded($event: { name: string; status: string }) {
    
  }
}
