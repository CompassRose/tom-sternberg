import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as d3 from 'd3';
import * as $ from 'jquery';
import timeFormat from 'd3-time-format';
import { MAPPING_DATA } from './mappings';
import { FormatService } from './format.service';

@Injectable()
export class ChartConfigService {
    private mappingData = MAPPING_DATA;
    public detailData;
    private rowData: any;
    public mouse: any = { x: 0, y: 0 };
    private columnData: any[] = [];

    public newQuoteSubject = new BehaviorSubject<any>(this.detailData);

    constructor(private http: HttpClient, private formatService: FormatService) {
        this.initMouse(this);
    }

    getSubjectData(newList) {
        this.newQuoteSubject.next(newList);
    }

    // Old hard coded csv response
    getCsvData(): Observable<any> {
        return this.http
            .get('../../../assets/data-collections/Quotes.csv', { responseType: 'text' })
            .map(res => this.mapInitialData(res))
            .catch(this.handleError);
    }

    private handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        // console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    // Initial chart states from raw data
    private mapInitialData(res) {
        const dataRows: any = d3.csvParse(res);
        this.columnData = dataRows.columns;
        this.rowData = dataRows.filter(function(el) {
            return el !== 'columns';
        });
        return this.rowData;
    }

    public mapDataRows(dataRows) {
        const mapper: any = this.mappingData;
        let data: any = d3.entries(dataRows);
        data = data.map((d, i) => {
            const obj: any = {};
            mapper.quotes.forEach((item, index) => {
                if (!item.count) {
                    obj[item.value] = this.formatService.formatData(d, item);
                }
            });
            return obj;
        });
        return data;
    }

    // Rolls up chart data into usable format
    nestChartData(key: string, data: object[]): any[] {
        const nest = d3
            .nest()
            .key(function(d) {
                return d[key];
            })
            .sortKeys(d3.ascending)
            .rollup(leaves => {
                const obj = {},
                    rollup = this.rollitup();
                rollup.forEach(function(v, i) {
                    if (v.count) {
                        obj[v.value] = leaves.length;
                    } else {
                        obj[v.value] = d3.sum(leaves, function(d) {
                            return d[v.value];
                        });
                    }
                });
                return obj as any;
            })
            .entries(data)
            .map(function(group: any, i) {
                if (!group.key) {
                    // console.log("Chart group Gone Bad ", group.value);
                }
                return {
                    key: group.key,
                    values: group.value
                };
            });
        // console.log('Chart nest ', nest);
        return nest;
    }

    // get rollup fields as defined in mappings.js
    private rollitup() {
        const rollup = [];
        this.mappingData.quotes.forEach(function(v: any) {
            if (v.rollup) {
                rollup.push(v);
            }
        });
        return rollup;
    }

    sizeContainers = function(target) {
        const pieChartWindow = document.getElementById(target);
        const chartWindow = pieChartWindow.getBoundingClientRect();
        return { width: Math.abs(chartWindow.width), height: 230 };
    };

    // get the right fields pertaining to this widget
    getFields(id: string) {
        let fields: any = this.mappingData;
        fields = fields.quotes.filter((d: any) => {
            return d[id];
        });
        fields.sort(function(a, b) {
            if (a.value < b.value) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            return 0;
        });
        return fields;
    }

    // populate the widget's dropdown with the fields
    initDropdown(val: { value: any }[]) {
        return val.map(v => v.value);
    }

    // update row count badge text
    setRowCount(details: any[]) {
        console.log('setRowCount ', details.length);
        this.detailData = details;
        const len = details.length;
        const badge = $('#rowCount');
        badge.text(len);
        badge.css('background', this.getRowCount().color);
    }

    // get row count
    getRowCount() {
        const count: any = $('#rowCount').text();
        let color = 'green';
        let message = '';

        if (count <= 1000) {
            color = 'green';
            message = '';
        } else if (count > 5000) {
            color = 'red';
            message = 'This could take a minute.';
        } else {
            color = '#f0ad4e';
            message = 'Should just be a few seconds.';
        }
        return { count: count, color: color, message: message };
    }

    private initMouse(parent) {
        document.addEventListener(
            'mousemove',
            function(e: MouseEvent) {
                parent.mouse.x =
                    (e.clientX || e.pageX) +
                    (document.body.scrollLeft || document.documentElement.scrollLeft);
                parent.mouse.y =
                    (e.clientY || e.pageY) +
                    (document.body.scrollTop || document.documentElement.scrollTop);
                //  console.log('initMouse x ', parent.mouse.x, ' y ', parent.mouse.y);
            },
            false
        );
    }
}
