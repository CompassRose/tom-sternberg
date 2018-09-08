import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';
import * as $ from 'jquery';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTranscludeModalComponent } from '../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';

@Component({
    selector: 'app-inspector-main',
    templateUrl: './inspector-main.component.html',
    styleUrls: ['./inspector-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ChartConfigService]
})
export class InspectorMainComponent implements OnInit {
    public rowAmount: any[] = [];
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

    constructor(private quoteService: ChartConfigService, private modalService: NgbModal) {}

    ngOnInit() {
        $('#topheader .navbar-nav a').on('click', function() {
            $('#topheader .navbar-nav')
                .find('li.active')
                .removeClass('active');
            $(this)
                .parent('li')
                .addClass('active');
        });

        this.quoteService.newQuoteSubject.subscribe(data => {
            // data.map();
            this.setRowData(data);
        });
        // this.quoteService.getSubjectData(this.dynamicData);
        // this.quoteService.getSubjectData(filteredList);
    }

    setRowData(arg) {
        console.log('data.length ', typeof arg);
        this.rowAmount = arg;
    }

    openModal() {
        console.log('Inspector Instructions');
        const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
            size: 'lg',
            windowClass: 'modal-xxl'
        });
        modalRef.componentInstance.modalName = 'Inspector Instructions';
        modalRef.componentInstance.modalContent = this.screenInstructions;
        modalRef.componentInstance.modalButtons = this.modalButtons;
    }
}
