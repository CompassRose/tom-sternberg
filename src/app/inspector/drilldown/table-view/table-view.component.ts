import { Component, OnInit, Output, OnChanges, Input, EventEmitter } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'table-view',
  template: '<div></div>'
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
      this.data = this.tableData;
      this.id = this.attachNode;
      this.key = this.tableTitle;
      this.gridInit(this);
    }
  }

  ngOnInit(): void {
    this.data = this.tableData;
    this.id = this.attachNode;
    this.key = this.tableTitle;
    this.gridInit(this);
  }

  // Call parent function to reset to single on click
  private resetBarChart(value) {
    this.resetEvent.next(value);
  }

  private gridInit(parent) {
    d3.select('#' + this.attachNode)
      .select('table')
      .remove();
    d3.select('#' + this.attachNode)
      .select('svg')
      .remove();

    const grid = d3
      .select('#' + this.attachNode)
      .append('table')
      .attr('class', 'table table-hover');

    const headRow = grid
      .append('thead')
      .attr('class', 'headerBold')
      .append('tr');
    headRow
      .append('th')
      .attr('class', 'headerBold')
      .text(this.key);

    for (let i = 0; i < d3.keys(parent.data[0].values).length; i++) {
      const key = d3.keys(parent.data[0].values)[i];
      headRow
        .append('th')
        .attr('class', 'headerBold')
        .text(key.split('_').join(' '));
    }

    const tbody = grid.append('tbody');

    const row = tbody
      .selectAll('tr')
      .data(parent.data)
      .enter()
      .append('tr')
      .on('click', function(d: any) {
        const filter = { key: d.key, values: d.values };
        parent.resetBarChart(filter);
      });

    row
      .append('td')
      .attr('class', 'dataRow')
      .text(function(d: any) {
        const key = d.key;
        return key;
      });

    for (let i = 0; i < d3.keys(parent.data[0].values).length; i++) {
      const key = d3.keys(this.data[0].values)[i],
        moneyFormat = function(n, currency) {
          return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        },
        isTotal = function(key) {
          return key.indexOf('Total') !== -1;
        };
      row
        .append('td')
        .attr('class', 'text-right')
        .attr('class', 'dataRow')
        .text(function(d: any) {
          return isTotal(key) ? moneyFormat(d.values[key], '$') : d.values[key];
        });
    }
  }
}
