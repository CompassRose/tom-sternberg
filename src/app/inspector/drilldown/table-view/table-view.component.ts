import { Component, OnInit, Output, OnChanges, Input, EventEmitter } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.scss', '../drilldown-common.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
    @Input()
    tableData;
    @Input()
    attachNode: any;
    @Input()
    tableTitle: any;

    @Output()
    resetEvent = new EventEmitter<any>();

    private key: any;
    private id: any;
    private data: any;

    ngOnChanges(): void {
        if (this.data) {
            console.log('ngOnChanges ', this.tableData);
            this.data = this.tableData;
            this.id = this.attachNode;
            this.key = this.tableTitle;
            this.gridInit(this);
        }
    }

    ngOnInit(): void {
        this.data = this.tableData;
        //console.log("ngOnChanges ", this.data);
        this.id = this.attachNode;
        this.key = this.tableTitle;
        this.gridInit(this);
    }

    // Call parent function to reset to single on click
    private resetBarChart(value) {
        //console.log("this table data ", value);
        this.resetEvent.next(value);
    }

    private gridInit(parent) {
        d3.select('#' + this.attachNode)
            .select('table')
            .remove();
        d3.select('#' + this.attachNode)
            .select('svg')
            .remove();

        var grid = d3
            .select('#' + this.attachNode)
            .append('table')
            .attr('class', 'table table-hover');

        var headRow = grid
            .append('thead')
            .attr('class', 'headerBold')
            .append('tr');
        headRow.append('th').text(this.key);

        for (var i: number = 0; i < d3.keys(parent.data[0].values).length; i++) {
            var key = d3.keys(parent.data[0].values)[i];
            headRow
                .append('th')
                .attr('class', 'text-right')
                .text(key.split('_').join(' '));
        }

        var tbody = grid.append('tbody');

        var row = tbody
            .selectAll('tr')
            .data(parent.data)
            .enter()
            .append('tr')
            .on('click', function(d: any) {
                var filter = { key: d.key, values: d.values };
                parent.resetBarChart(filter);
            });

        row.append('td')
            .attr('class', 'dataRow')
            .text(function(d: any) {
                var key = d.key;
                return key;
            });

        for (var i = 0; i < d3.keys(parent.data[0].values).length; i++) {
            var key = d3.keys(this.data[0].values)[i],
                moneyFormat = function(n, currency) {
                    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                },
                isTotal = function(key) {
                    return key.indexOf('Total') !== -1;
                };
            row.append('td')
                .attr('class', 'text-right')
                .attr('class', 'dataRow')
                .text(function(d: any) {
                    return isTotal(key) ? moneyFormat(d.values[key], '$') : d.values[key];
                });
        }
    }
}
