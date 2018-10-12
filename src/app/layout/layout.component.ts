import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LayoutComponent implements OnInit {
  public isExpanded = false;
  currentUser: User;
  users: User[] = [];

  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
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
  }
  menu_OnClick(evt) {
    this.isExpanded = !this.isExpanded;
  }
}
