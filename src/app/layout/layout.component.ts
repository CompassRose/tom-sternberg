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

  ngOnInit() {}

  menu_OnClick(evt) {
    this.isExpanded = !this.isExpanded;
  }
}
