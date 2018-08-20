import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-inspector-main',
    templateUrl: './inspector-main.component.html',
    styleUrls: ['./inspector-main.component.scss'],
    providers: [ChartConfigService],
})
export class InspectorMainComponent implements OnInit {
    constructor(private quoteService: ChartConfigService) {}

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
}
