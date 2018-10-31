import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NgbdTranscludeModalComponent } from '../ngb-transclude-modal/ngb-transclude-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shared-tab',
  templateUrl: './shared-tab.component.html',
  styleUrls: ['./shared-tab.component.scss']
})
export class SharedTabComponent implements OnInit, AfterViewInit {
  @Input()
  tabValues: any[];

  private tabElements: any[] = [];
  private indexFrom = 0;
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
    this.tabElements = this.tabValues;
    console.log('SharedTabComponent tabElements ', this.tabElements);
  }

  ngAfterViewInit() {
    $('#topheader .navbar-nav li:first').addClass('active');
  }

  openModal() {
    console.log('Instructions ');
    const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.modalName = this.tabElements[this.indexFrom].name + ' Instructions';
    modalRef.componentInstance.modalContent = this.tabElements[this.indexFrom].instructions;
    // modalRef.componentInstance.modalButtons = 'Close';
  }

  setRoute(idx: number) {
    this.indexFrom = idx;
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
