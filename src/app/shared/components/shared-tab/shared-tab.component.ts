import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-shared-tab',
  templateUrl: './shared-tab.component.html',
  styleUrls: ['./shared-tab.component.scss']
})
export class SharedTabComponent implements OnInit, AfterViewInit {
  @Input()
  tabValues: any[];

  private tabElements: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.tabElements = this.tabValues;
    console.log('SharedTabComponent tabElements ', this.tabElements);
  }

  ngAfterViewInit() {
    $('#topheader .navbar-nav li:first').addClass('active');
  }

  setRoute(idx: number) {
    $('#topheader .navbar-nav a').on('click', function() {
      $('#topheader .navbar-nav')
        .find('li.active')
        .removeClass('active');
      $(this)
        .parent('li')
        .addClass('active');
    });
    this.router.navigate(['app/family/family-routes/' + this.tabElements[idx].link]);
  }
}
