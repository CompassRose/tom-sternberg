import { Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './services/picture.service';
import { DataService } from '../data.service';
import { CustomTooltipComponent } from '../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTranscludeModalComponent } from '../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  providers: [PicturesComponent, PictureService, CustomTooltipComponent]
})
export class FamilyComponent implements OnInit {
  public pictures = [];
  public selectedIdx = 1;
  public users;
  public modalButtons = {
    name: 'Close'
  };

  public screenInstructions = [
    'Family Photo Screen',
    'Hover over pictures for more detailed information',
    'Click on one or more pictures for a larger view',
    'Select All, or one or more dynamically generated checkboxes to filter by category',
    'Load/Edit/Save process forthcoming'
  ];

  constructor(
    private picturesComponent: PicturesComponent,
    private tooltipComponent: CustomTooltipComponent,
    private _pictureService: PictureService,
    private _dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    $('#topheader .navbar-nav a').on('click', function() {
      $('#topheader .navbar-nav')
        .find('li.active')
        .removeClass('active');
      $(this)
        .parent('li')
        .addClass('active');
    });
    this.getUserCollection();
    this.getPictureCollection();

    // this._dataService.getUsers().subscribe(res => (this.users = res));
    // console.log('this.users ', this.users);
  }

  getUserCollection(): void {
    this._dataService.getUsers().subscribe(data => {
      console.log('getUserContents ', data);
    });
  }

  getPictureCollection(): void {
    this._dataService.getPictures().subscribe(data => {
      console.log('getPictureContents ', data);
    });
  }

  postPictureCollection(): void {
    this._dataService.postPictures();
  }

  openModal() {
    // console.log('Family Instructions');
    this.postPictureCollection();
    const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.modalName = 'Family Page Instructions';
    modalRef.componentInstance.modalContent = this.screenInstructions;
    modalRef.componentInstance.modalButtons = this.modalButtons;
  }
}
