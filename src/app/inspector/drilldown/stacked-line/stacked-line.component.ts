import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
} from '@angular/core';
import { ChartConfigService } from '../../services/chart-config.service';
import { CustomTooltipComponent } from '../../../shared/components/custom-tooltip/custom-tooltip.component';

import * as d3 from 'd3';
import * as $ from 'jquery';

import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import { timeFormat } from 'd3-time-format';
import { IChartMargin } from '../../interfaces/Filters';

@Component({
    selector: 'app-line-chart',
    templateUrl: './stacked-line.component.html',
    styleUrls: ['./stacked-line.component.scss', '../drilldown-common.scss'],
    providers: [ChartConfigService, CustomTooltipComponent],
    encapsulation: ViewEncapsulation.None,
})
export class LineChartComponent implements OnInit, OnChanges {
    constructor(private quoteService: ChartConfigService) {}

    @Input()
    lineData: any[];
    @Input()
    attachNode: any;
    @Input()
    isPremium: any;
    @Input()
    totalVal: any;
    @Input()
    soldVal: any;
    @Input()
    colorVal: any = [];
    @Input()
    dropdownSelectors;

    @Output()
    resetEvent = new EventEmitter<any>();
    @Output()
    tooltipEvent = new EventEmitter<any>();
    @Output()
    tooltipHide = new EventEmitter<any>();

    private data: any;
    private margin: IChartMargin;
    private line;
    private line2;
    private lineStart;

    private events;
    private legend;

    private series1;
    private series2;
    private sold;
    private total;
    private isPrem;
    private container: any;
    private x: any;
    private y: any;
    private svg: any;
    private xAxis: any = {};
    private yAxis: any = {};
    private color: any = [];
    private key: string;
    private chartType: string;
    private id = 'timeline';

    ngOnChanges(): void {
        if (this.data) {
            // console.log( '\n\nLine changing ', this.lineData );
            this.total = this.totalVal;
            this.sold = this.soldVal;
            this.data = this.lineData;
            this.isPrem = this.isPremium;
            this.color = this.colorVal;
            this.chartInit();
        }
    }

    ngOnInit() {
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
        this.total = this.totalVal;
        this.sold = this.soldVal;
        this.color = this.colorVal;
        this.chartType = 'line';
        this.key = 'Quote Year and Month Created';

        setTimeout(() => {
            this.data = this.lineData;
            // this.quoteService.sizeContainers('timeline');
            this.container = this.quoteService.sizeContainers('svgLine');
            this.chartInit();
        }, 300);
    }

    // Call parent function to reset to single on click
    private resetLineChart(value, parent) {
        parent.quoteService.hideTip();
        this.resetEvent.next(value);
    }

    // Call parent function to show tooltip
    private showTooltip(values, x, y) {
        this.tooltipEvent.next({ values: values, x: x, y: y });
    }

    // Call parent function to show tooltip
    private hideTooltip() {
        this.tooltipHide.next();
    }

    // Remove empty data rows
    private chartInit() {
        this.lineData.forEach((d, i) => {
            if (d.key === 'undefined') {
                this.lineData.splice(i, 1);
            }
        });
        this.initChart(this);
        this.drawSVG(this);
        this.drawLine(this.series1, this.line, this.sold, this.color[0], this);
        this.drawLine(this.series2, this.line2, this.total, this.color[1], this);
        this.drawLegend(this.legend, 20, 0, this.color[0], this.total);
        this.drawLegend(this.legend, 20, 20, this.color[1], this.sold);
        this.initializeEvents(this);
    }

    private initChart(parent): void {
        const curveArray = [
            { d3Curve: d3.curveLinear, curveTitle: 'curveLinear' },
            { d3Curve: d3.curveStep, curveTitle: 'curveStep' },
            { d3Curve: d3.curveStepBefore, curveTitle: 'curveStepBefore' },
            { d3Curve: d3.curveStepAfter, curveTitle: 'curveStepAfter' },
            { d3Curve: d3.curveBasis, curveTitle: 'curveBasis' },
            { d3Curve: d3.curveCardinal, curveTitle: 'curveCardinal' },
            { d3Curve: d3.curveMonotoneX, curveTitle: 'curveMonotoneX' },
            { d3Curve: d3.curveCatmullRom, curveTitle: 'curveCatmullRom' },
        ];

        const x: any = d3
            .scaleBand()
            .rangeRound([0, this.container.width])
            .paddingInner(0.05);

        const y: any = d3.scaleLinear().range([this.container.height, 5]);

        x.domain(
            this.data.map((d: any) => {
                return d.key as any;
            }),
        );

        y.domain([
            0,
            d3.max(this.data, (d: any) => {
                return d.values[parent.total] as any;
            }),
        ]);

        const xAxis = d3
            .axisBottom(x)
            .tickFormat((d: any) => {
                return parent.attachMode === 'timeline' ? parent.formatDate(d) : d;
            })
            .scale(x);

        const yAxis = d3
            .axisLeft(y)
            .tickFormat((d: any) => {
                if (parent.isPrem) {
                    const M = d / 1000000,
                        K = d / 1000;
                    if (M >= 1) {
                        return '$' + M + 'M';
                    } else if (K >= 1) {
                        return '$' + K + 'K';
                    } else {
                        return '$' + d;
                    }
                } else {
                    return d;
                }
            })
            .scale(y);

        this.x = x;
        this.y = y;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    // create the svg elements for the line chart
    private drawSVG(parent) {
        d3.select('#' + this.attachNode)
            .select('svg')
            .remove();
        d3.select('#' + this.attachNode)
            .select('table')
            .remove();

        const svg = d3
            .select('#' + this.attachNode)
            .append('center')
            .append('svg')
            .attr('id', 'line-chart')
            .attr('width', this.container.width - this.margin.left - this.margin.right)
            .attr('height', this.container.height + this.margin.top + this.margin.bottom)
            .attr(
                'viewBox',
                '0, 0, ' +
                    (this.container.width + this.margin.left + this.margin.right) +
                    ', ' +
                    (this.container.height + this.margin.top + this.margin.bottom),
            );
        this.svg = svg;

        // create group for all line chart elements
        const chart = this.svg
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

        // horizontal lines in the background bound to the y axis
        const hGrid = chart
            .selectAll('line.horizontalGrid')
            .data(this.y.ticks)
            .enter()
            .append('line')
            .attr('class', 'horizontalGrid')
            .attr('x1', 0)
            .attr('x2', this.container.width)
            .attr('y1', function(d: any) {
                return parent.y(d);
            })
            .attr('y2', (d: any) => {
                return parent.y(d);
            });

        // create the x axis
        const axisX = chart
            .append('g')
            .attr('transform', 'translate(0,' + this.container.height + ')')
            .call(this.xAxis);

        // X axis line and text
        axisX.select('path').attr('class', 'axis-path');

        // Y axis line and text
        const axisY = chart.append('g').call(this.yAxis);

        axisY.selectAll('g.tick text').attr('class', 'axis-text');

        axisY.select('path').attr('class', 'axis-path');

        axisY.selectAll('g.tick line').attr('class', 'axis-tick');

        // lengthen odd Y axis label ticks for staggering labels
        axisX
            .selectAll('g.tick line')
            .attr('class', 'axis-tick')
            .attr('y2', function(d: any, i) {
                return i % 32 ? 14 : 6;
            })
            .attr('opacity', (d, i) => {
                let o: number;
                if (parent.data.length > 30) {
                    o = i % 16 ? 0 : 1;
                } else {
                    o = 1;
                }
                return o;
            });

        // stagger odd Y axis labels so labels don't overlap
        axisX
            .selectAll('g.tick text')
            .attr('class', 'axis-text')
            .attr('y', (d: any, i) => {
                return i % 32 ? 20 : 8;
            })
            .attr('opacity', function(d, i) {
                let o: number;
                if (parent.data.length > 30) {
                    o = i % 16 ? 0 : 1;
                } else {
                    o = 1;
                }
                return o;
            });

        const lineStart: any = d3
            .area()
            .curve(d3.curveLinear)
            .x(function(d: any) {
                return d.key;
            })
            .y(function(d: any) {
                return 0;
            });

        // define the line
        const line1 = d3
            .area()
            .curve(d3.curveLinear)
            .x(function(d: any) {
                return parent.x(d.key);
            })
            .y(function(d: any) {
                return parent.y(d.values[parent.total]);
            });

        // define the line
        const line2 = d3
            .area()
            .curve(d3.curveLinear)
            .x(function(d: any) {
                return parent.x(d.key);
            })
            .y(function(d: any) {
                return parent.y(d.values[parent.sold]);
            });

        //  create series for 1st line & points
        const series1 = chart.append('g').attr('class', 'series1');

        // create series for 2nd line & points
        const series2 = chart.append('g').attr('class', 'series2');

        // create events group, will hold elements for binding mouse events to
        const events = chart.append('g').attr('class', 'events');

        // create a group for the chart legend
        let legend = this.svg
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + this.margin.left + ', 0)');

        // create a group for the chart key
        legend = legend
            .append('g')
            .attr('class', 'key')
            .attr('transform', 'translate(' + (this.container.width - 180) + ', -20)');

        legend
            .append('rect')
            .attr('height', 37)
            .attr('width', 220)
            .attr('x', 0)
            .attr('class', 'legend-back');

        this.lineStart = lineStart;
        this.line = line1;
        this.line2 = line2;
        this.series1 = series1;
        this.series2 = series2;
        this.events = events;
        this.legend = legend;
    }

    private drawLine(series, line, values, color, parent) {
        series
            .append('path')
            .datum(this.data)
            .style('fill', 'none')
            .style('stroke', color)
            .style('stroke-width', '2px')
            .attr('class', 'line')
            .transition()
            .duration(1000)
            .attr('d', line);

        series
            .selectAll('.point')
            .data(this.data)
            .enter()
            .append('circle')
            .attr('class', 'point')
            .attr('r', '0px')
            .attr('fill', color)
            .attr('fill-opacity', 0)
            .attr('cx', function(d: any) {
                return parent.x(d.key) + parent.x.bandwidth() / 2;
            })
            .attr('cy', line)
            .attr('r', '1px')
            .attr('fill', color)
            .attr('fill-opacity', 0)
            .transition()
            .duration(1000)
            .attr('cy', function(d: any) {
                return parent.y(d.values[values]);
            });
    }

    private initializeEvents(parent) {
        parent.events
            .selectAll('.hover')
            .data(this.data)
            .enter()
            .append('rect')
            .attr('class', 'hover')
            .attr('x', function(d: any) {
                return parent.x(d.key);
            })
            .attr('y', function(d: any) {
                return parent.y(d.values[parent.total]);
            })
            .attr('height', function(d: any) {
                return parent.container.height - parent.y(d.values[parent.total]);
            })
            .attr('width', parent.container.width)
            .attr('fill', 'white')
            .attr('fill-opacity', 0)
            .on('click', function(d: any) {
                const drilldownFilter = { key: d.key, values: d.values };
                parent.hideTooltip();
                parent.resetLineChart(drilldownFilter, parent);
                setTimeout(() => {
                    parent.quoteService.hideTip();
                }, 300);
            })
            .on('mousemove', function(d, i) {
                parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
            })
            .on('mouseleave', function() {
                parent.hideTooltip();
            });
    }

    private drawLegend(legend, offsetX, offsetY, color, values) {
        legend
            .append('rect')
            .attr('height', 12)
            .attr('width', 12)
            .attr('x', 5)
            .attr('y', offsetY)
            .attr('fill', color);

        legend
            .append('text')
            .attr('dy', '1em')
            .attr('x', offsetX)
            .attr('y', offsetY)
            .text(values);
    }
}
