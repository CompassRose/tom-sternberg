import { Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './services/picture.service';

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

    public modalButtons = {
        name: 'Close'
    };

    public screenInstructions = [
        'The Inspector screen shows sales information by Sales Person, Billing Mode and Time Period.',
        'Hover over chart elements for detailed information',
        'Click on one or more chart elements and filter for more specific details',
        'View your filters in the Search Criteria window',
        'Press Disk button to save filter groups to Saved Searches',
        'Load or delete Saved Searches',
        'Details and Map tabs reflect filtered values'
    ];

    constructor(
        private picturesComponent: PicturesComponent,
        private tooltipComponent: CustomTooltipComponent,
        private _pictureService: PictureService,
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
    }

    openModal() {
        console.log('Family Instructions');
        const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.modalName = 'Inspector Instructions';
        modalRef.componentInstance.modalContent = this.screenInstructions;
        modalRef.componentInstance.modalButtons = this.modalButtons;
    }
}
