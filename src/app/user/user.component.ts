import { Component } from "@angular/core";

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})
export class UserComponent{
    
    userId:number=1001;
    userStatus:string;

    constructor(){
        this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getUserStatus(){
        return this.userStatus;
    }

    getColor(){
        if(this.userStatus === 'online') {
            return 'green';
        }
        return 'red';
    }
}
