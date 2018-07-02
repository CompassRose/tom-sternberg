import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ngbd-tabs',
  templateUrl: './ngbd-tabs.component.html',
  styleUrls: ['./ngbd-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgbdTabsComponent implements OnInit {

  currentJustify = 'justify';

  @Input() tabContent1;
  @Input() tabContent2;

  @Output() removeFilter = new EventEmitter<any>();
  @Output() removeFilterSet = new EventEmitter<any>();
  @Output() saveFilterSet = new EventEmitter<any>();

  public content_1: any;
  public content_2: any;
  public saveActive: boolean;

  constructor() { }

  ngOnInit() {
    this.content_1 = this.tabContent1;
    this.content_2 = this.tabContent2;
    this.currentJustify = 'justified';
    this.saveActive = true;
  }


  // Call parent function to show remove a filter
  public removeFilterEvent(e, i) {
    console.log('removeFilterEvent ', e, i);
    this.removeFilter.next(e);
  }

  public testFunction(e, i) {
    this.removeFilterEvent( e, i);
  }

  // Call parent function to show tooltip
  public saveSearchEvent() {
    this.saveFilterSet.next();
  }


  // Call parent function to show tooltip
  public removeFilterSetEvent(values) {
    this.removeFilterSet.next({values});
  }


}
