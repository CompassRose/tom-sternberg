import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTranscludeModalComponent } from '../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';

@Component({
    selector: 'app-inspector-main',
    templateUrl: './inspector-main.component.html',
    styleUrls: ['./inspector-main.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ChartConfigService]
})
export class InspectorMainComponent implements OnInit {
    public rowCountColor: string;
    public rowAmount: number;
    public drilldownInstructions;
    public screenInstructions;
    public modalButtons = {
        name: 'Close'
    };

    constructor(private quoteService: ChartConfigService, private modalService: NgbModal) {
        this.screenInstructions = {
            drilldownInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ],
            detailInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ],
            mapInstructions: [
                'The Inspector Drilldown screen shows sales information by Sales Person, Billing Mode and Time Period.',
                'Hover over chart elements for detailed information',
                'Click on one or more chart elements and filter for more specific details',
                'View your filters in the Search Criteria window',
                'Press Disk button to save filter groups to Saved Searches',
                'Load or delete Saved Searches',
                'Details and Map tabs reflect filtered values'
            ]
        };
    }

    ngOnInit() {
        $('#topheader .navbar-nav a').on('click', function() {
            $('#topheader .navbar-nav')
                .find('li.active')
                .removeClass('active');
            $(this)
                .parent('li')
                .addClass('active');
        });

        setTimeout(() => {
            this.quoteService.newQuoteSubject.subscribe(data => {
                this.setRowData(data);
            });
        }, 300);
    }

    // Set flag for details tab row counts
    setRowData(arg) {
        if (arg.length > 6000) {
            this.rowCountColor = 'red';
        } else if (arg.length > 100 && arg.length <= 6000) {
            this.rowCountColor = 'blue';
        } else {
            this.rowCountColor = 'LimeGreen';
        }
        this.rowAmount = arg.length;
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
