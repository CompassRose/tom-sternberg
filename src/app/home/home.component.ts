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

  // this.loadAllUsers();
  // this.router.navigate(['app/login']);
  // console.log('ngOnInit currentUser ', this.currentUser);
  // this.router.navigate(['app/inspector/inspect/drilldown']);
  // this.router.navigate(['app/resume']);
  // this.router.navigate(['app/home']);
  // this.router.navigate(['app/wheelspin']);
  // this.router.navigate(['app/login']);
  // this.router.navigate(['app/family/family-routes/dTree']);
  // this.router.navigate(['app/family/family-routes/familyTree']);
  // this.router.navigate(['app/family/family-routes/pictures']);
  // this.router.navigate(['app/boneyard']);

  ngOnInit() {
    this.isLoggedIn.subscribe(data => {
      this.identity = data;
      console.log('this.currentUser ', this.currentUser);
      if (this.identity) {
        this.loadAllUsers();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.router.navigate(['app/wheelspin']);
        this.router.navigate(['app/resume']);
        // this.router.navigate(['app/family/family-routes/pictures']);
        // this.router.navigate(['app/family/family-routes/worldmap-locator']);
        // this.router.navigate(['app/family/family-routes/dTree']);
        // this.router.navigate(['app/family/family-routes/pictures']);
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
