import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';
import { Observable } from 'rxjs/Observable';

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
            this.detailRows = data;
        });
    }
}
