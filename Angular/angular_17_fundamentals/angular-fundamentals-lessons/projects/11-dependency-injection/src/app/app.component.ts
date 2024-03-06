import { User } from './data';
import { UserService } from './user.service';
import { Component, inject, OnInit } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: `
    <h1>User Listing</h1>
    @for(user of userData; track user.id){
    <app-user-info [user]="user" />
    }
  `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService);
  userData: User[] = [];
  async ngOnInit(): Promise<void> {
    const data = await this.userService.getUserData();
    this.userData = data;
  }
  // constructor() {
  //   this.userService.getUserData().then((data) => {
  //     this.userData = data;
  //   });
  // }
}
