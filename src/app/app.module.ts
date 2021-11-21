import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UsersComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
