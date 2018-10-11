import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  @Input()
  loggedInAs;

  currentUser: User;
  users: User[] = [];
  public identity = false;
  openUserProfile = false;

  constructor(private userService: UserService, private router: Router) {
    console.log('user ', JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    console.log('Home Loading ', this.currentUser);
    this.currentUser = this.loggedInAs;
    if (this.loggedInAs) {
      this.identity = true;
      this.loadAllUsers();
    }
  }

  signIn() {
    this.router.navigate(['app/login']);
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private logOut() {
    this.openUserProfile = false;
    this.identity = false;
    this.router.navigate(['app/login']);
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        console.log('loadAllUsers ', users);
        this.users = users;
      });
  }
}
