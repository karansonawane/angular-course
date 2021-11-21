import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  // selector: '[app-users]', //attribute selector
  // selector: '.app-users',  //class selector
  templateUrl: './users.component.html',
  // template: `<app-user></app-user>`,
  styleUrls: ['./users.component.css']
  // styles: [
  //   `
  //   p{
  //     color:red;
  //   }

  //   `
  // ]
})
export class UsersComponent implements OnInit {

  allowNewUser = false;
  userCreatedStatus = 'No User is created';
  userName='Test user';
  isUserCreated=false;

  constructor() { 
    setTimeout(() => {
      this.allowNewUser=true;
    },3000);
   }

   changeUserCreatedStatus(){
     this.isUserCreated=true
     this.userCreatedStatus = 'User is created';
   }

   onUpdateUser(event: Event){
     this.userName = (event.target as HTMLInputElement).value;
   }

  ngOnInit(): void {
  }

}
