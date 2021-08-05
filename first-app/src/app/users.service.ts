import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers:string[] = ['Max', 'Anna'];
  inactiveUsers:string[] = ['Chris', 'Manu'];
  usersSwapCount:{number:number} = {number:0};
  constructor() { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usersSwapCount.number++;
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersSwapCount.number++;
  }
}
