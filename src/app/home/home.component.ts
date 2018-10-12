import { Component, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { AuthenticationService, UserService } from '../_services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  currentUser: User;
  users: User[] = [];
  public identity = false;
  openUserProfile = false;

  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService) {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.isLoggedIn.subscribe(data => {
      this.identity = data;
      if (this.identity) {
        this.loadAllUsers();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.router.navigate(['app/wheelspin']);
      } else {
        this.router.navigate(['app/login']);
      }
    });
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
    this.authenticationService.logout();
    this.openUserProfile = false;
    this.identity = false;
    this.router.navigate(['app/login']);
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
