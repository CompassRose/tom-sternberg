import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    constructor(public quoteService: ChartConfigService) {}

    private detailRows = [];

    ngOnInit(): any {
        // updates details filter
        this.quoteService.newQuoteSubject.subscribe(data => {
            console.log('detail data, data', data.length);
            this.detailRows = data;
        });
    }
}
