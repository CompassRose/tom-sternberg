import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { ChartConfigService } from '../services/chart-config.service';
import { FormatService } from '../services/format.service';
import { IFilter, NamedFilter } from '../interfaces/Filters';
import { AppChart } from '../interfaces/AppCharts';

import * as $ from 'jquery';

// TODO  Get rid of jQuery

@Component({
    selector: 'app-drilldown',
    templateUrl: './drilldown.component.html',
    styleUrls: ['./drilldown.component.scss'],
    providers: [FormatService]
})
export class DrilldownComponent implements OnInit {
    constructor(private quoteService: ChartConfigService, private formatService: FormatService) {}

    private color1 = ['#05d6ff', '#012172'];
    private color2 = ['#00e75b', '#006f2e'];

    filters: IFilter[] = [];
    filterSets: NamedFilter[] = [];
    private fields;
    private btnTypes: any = ['bar', 'pie', 'line', 'table'];
    private allRows: any[] = [];
    public dynamicData: any[] = [];
    public tableActive = false;

    public showTip = false;
    public toolTitle: string;
    public toolValues: any[] = [];
    public tooltipPositionX;
    public tooltipPositionY;

    public allCharts: AppChart[] = [
        <AppChart>{
            title: 'Sales Person',
            key: '',
            id: 'organization',
            chartType: 'bar',
            chartTypeInit: 'bar',
            total: 'Number of Quotes',
            sold: 'Number of Quotes Sold',
            isPremium: false,
            columnData: [],
            color: this.color1,
            data: []
        },
        <AppChart>{
            title: 'Billing Mode',
            key: '',
            id: 'variable',
            chartType: 'pie',
            chartTypeInit: 'pie',
            total: 'Number of Quotes',
            sold: 'Number of Quotes Sold',
            isPremium: false,
            columnData: [],
            color: this.color1,
            data: []
        },
        <AppChart>{
            title: 'Quote Year and Month Created',
            key: '',
            id: 'timeline',
            chartType: 'line',
            chartTypeInit: 'line',
            total: 'Number of Quotes',
            sold: 'Number of Quotes Sold',
            isPremium: false,
            columnData: [],
            color: this.color1,
            data: []
        }
    ];

    ngOnInit() {
        this.quoteService.getCsvData().subscribe(rowData => {
            this.allRows = rowData;
            this.fields = this.quoteService.getFields(this.allCharts[1].id);
            this.allCharts[1].columnData = this.quoteService.initDropdown(this.fields);
            this.fields = this.quoteService.getFields(this.allCharts[2].id);
            this.allCharts[2].columnData = this.quoteService.initDropdown(this.fields);
            this.resetCharts();
        });
        this.activateTabOne();
    }

    removeFilter(e, idx) {
        this.removeThisFilter(e, 0);
    }

    initToolEvent(e) {
        this.showTip = true;
        this.tooltipPositionX = e.x + 60;
        this.tooltipPositionY = e.y;
        this.toolTitle = e.values.key;
        this.toolValues = e.values.values;
    }

    hideToolEvent() {
        this.showTip = false;
    }

    // Set initial chart state and fill charts
    resetCharts() {
        this.allCharts[0].chartType = 'bar';
        this.allCharts[0].title = 'Sales Person';
        this.allCharts[1].chartType = 'pie';
        this.allCharts[1].title = 'Billing Mode';
        this.allCharts[2].chartType = 'line';
        this.allCharts[2].title = 'Quote Year and Month Created';

        const processedRows = this.quoteService.mapDataRows(this.allRows);
        this.allRows = processedRows;
        this.dynamicData = processedRows;
        this.quoteService.getSubjectData(this.dynamicData);
        this.allCharts.forEach((d, i) => {
            d.data = this.quoteService.nestChartData(d.title, processedRows);
        });
        this.quoteService.getSubjectData(processedRows);
    }

    // Set chart specific buttons active/disabled
    setChartBtnsState(activeChart, action) {
        for (let idx = 0; idx < 4; idx++) {
            const newId = '.' + this.btnTypes[idx] + '-btn' + '.' + activeChart.id;
            $(newId).prop('disabled', action);
        }
    }

    // From chart elements click to set filters
    setCurrentChart(newData, index, setFilter) {
        console.log('setCurrentChart  ', this.allCharts[index], ' newData ', newData);
        this.setChartBtnsState(this.allCharts[index], true);
        const setFilterFormat = { key: this.allCharts[index].title, values: newData.key };
        this.allCharts[index].chartType = 'single';
        this.allCharts[index].key = newData.key;
        this.filters.push(setFilterFormat);
        const filteredList = this.returnFiltered('new');

        this.setChartData(filteredList);
        this.quoteService.getSubjectData(filteredList);
    }

    // Draws charts with updated data
    setChartData(filteredResponse) {
        this.allCharts.forEach((v, i) => {
            v.data = this.quoteService.nestChartData(v.title, filteredResponse);
            if (v.key !== '') {
                v.chartType = 'single';
            } else if (v.data.length <= 1 && v.chartType !== 'single') {
                v.chartType = 'table';
            } else if (v.data.length > 2 && v.chartType !== 'single') {
                v.chartType = v.chartTypeInit;
            }
            // console.log('setChartData v ', v);
        });
        this.quoteService.setRowCount(filteredResponse);
    }

    // From saved list delete filter
    removeThisFilter(item, i) {
        this.filters.splice(i, 1);
        this.allCharts.forEach((d, idx) => {
            if (item.key === d.title) {
                this.setChartBtnsState(d, false);
            }
            const filteredList = this.returnFiltered('remove');
            if (this.filters.length > 0) {
                this.filters.forEach((el, index) => {
                    if (d.title === item.key) {
                        d.key = '';
                        d.chartType = d.chartTypeInit;
                    } else if (d.title === el.key) {
                        this.setChartData(filteredList);
                    }
                });
            } else {
                if (d.title === item.key) {
                    d.key = '';
                    this.setChartData(filteredList);
                }
                d.chartType = d.chartTypeInit;
            }
            this.quoteService.getSubjectData(filteredList);
        });
    }

    // From timeline and variable charts dropdown selector
    dropdownSelector(i, type, newValue) {
        // console.log(
        //     'dropdownSelector i ',
        //     this.allCharts[i].data.length,
        //     ' type ',
        //     type,
        //     'newValue ',
        //     newValue
        // );
        this.allCharts[i].data = this.quoteService.nestChartData(newValue, this.dynamicData);
        this.allCharts[i].title = newValue;
        let drawTypeVal: number;
        this.allCharts[i].id === 'timeline' ? (drawTypeVal = 170) : (drawTypeVal = 15);
        if (this.allCharts[i].data.length >= drawTypeVal) {
            this.setChartType(i, 'table', false);
        } else {
            this.setChartType(i, this.allCharts[i].chartTypeInit, true);
        }
    }

    // From chart specific button presses
    setChartType(i, type, saved) {
        console.log('setChartType ', type, ' saved ', saved);
        if (saved) {
            this.allCharts[i].chartTypeInit = type;
        }
        this.allCharts[i].chartType = type;
        type === 'table' ? (this.tableActive = true) : (this.tableActive = false);
    }

    activateTabTwo() {
        $('a.nav-link.one').removeClass('active');
        $('div.tab-pane.one').removeClass('active');

        $('a.nav-link.two').addClass('active');
        $('div.tab-pane.two').addClass('active show');
    }

    activateTabOne() {
        $('a.nav-link.two').removeClass('active');
        $('div.tab-pane.two').removeClass('active');

        $('a.nav-link.one').addClass('active');
        $('div.tab-pane.one').addClass('active show');
    }

    // From Saved list press event
    //////////////////////////////
    saveFilterSet(searchValues) {
        // console.log('saveFilterSet searchValues ', searchValues);

        let filterSetter = [];

        // bootbox.prompt('Give your search criteria a name:', (name: any) => {
        // if (name) {
        filterSetter = JSON.parse(JSON.stringify(searchValues));
        this.filterSets.push({ filters: filterSetter });
        //  }
        // });
        console.log('saveFilterSet this.filterSets ', this.filterSets);
        const setLength = this.filterSets.length;
        // // need to find a better way of doing this
        $('a.nav-link.one').removeClass('active');
        $('div.tab-pane.one').removeClass('active');

        $('a.nav-link.two').addClass('active');
        $('div.tab-pane.two').addClass('active show');
    }

    setKeysToFilter() {
        this.allCharts.forEach((d: any, idx) => {
            this.filters.forEach((f, i) => {
                if (f.key === d.title) {
                    d.key = f.values;
                }
            });
            // console.log('setKeysToFilter d.title ', d.key);
        });
    }

    ////////////////////////////////////////////////////////
    // Load filter list

    loadFilterList(target) {
        console.log('loadFilterList target ', target);
        this.filters = [];
        let filterSetter = [];

        this.filterSets.forEach((d, i) => {
            filterSetter = JSON.parse(JSON.stringify(d.filters));
            this.filters = filterSetter;
        });

        let filteredList: any;
        this.allCharts.forEach((d, idx) => {
            d.data = [];
            filteredList = this.returnFiltered('new');
            console.log('this.allCharts.forEach ', d);
        });
        this.setKeysToFilter();
        this.setChartData(filteredList);

        // Need to find a better way of doing this
        $('a.nav-link.one').removeClass('active');
        $('div.tab-pane.one').removeClass('active');

        $('a.nav-link.two').addClass('active');
        $('div.tab-pane.two').addClass('active show');
    }

    // update the dataset when a filter is added, removed, etc
    private returnFiltered(action) {
        let data = action === 'remove' ? this.allRows : this.dynamicData;
        this.filters.forEach((v, index) => {
            data = data.filter(d => {
                return d[v.key] === v.values;
            });
        });
        // console.log('returnFiltered this.filters ', this.filters);
        this.dynamicData = data;
        return data;
    }

    // Removing Filters from saved box
    removeFilterSet(filterset, i) {
        // console.log('removing... ', this.filterSets);
        this.filterSets.splice(i, 1);
        // console.log('removed... ', this.filterSets);
        if (this.filterSets.length === 0) {
            // console.log('No filterSets elements left... ');
            // $('a.nav-link.two').removeClass('active');
            // $('div.tab-pane.two').removeClass('active');
            //
            // $('a.nav-link.one').addClass('active');
            // $('div.tab-pane.one').addClass('active show');
        }
    }

    private toggleTotalQuotes(i) {
        this.allCharts[i].isPremium = false;

        this.allCharts[i].color = this.color1;
        this.allCharts[i].total = 'Number of Quotes';
        this.allCharts[i].sold = 'Number of Quotes Sold';
    }

    private toggleTotalPremium(i) {
        this.allCharts[i].isPremium = true;
        this.allCharts[i].color = this.color2;
        this.allCharts[i].total = 'Total Premium Quoted';
        this.allCharts[i].sold = 'Total Premium Sold';
    }
}
