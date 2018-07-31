import {Component, Input, Output, OnInit, OnChanges, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ChartConfigService} from '../../services/chart-config.service';
import {CustomTooltipComponent} from '../../../shared/components/custom-tooltip/custom-tooltip.component';
import * as d3 from 'd3';
import {timeFormat} from 'd3-time-format';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss', '../drilldown-common.scss'],
  providers: [ChartConfigService, CustomTooltipComponent],
  encapsulation: ViewEncapsulation.None
})


export class BarChartComponent implements OnInit, OnChanges {

  @Input() barData: any[];
  @Input() attachNode: any;
  @Input() isPremium: any;
  @Input() totalVal: any;
  @Input() soldVal: any;
  @Input() colorVal: any;

  @Output() resetEvent = new EventEmitter<any>();
  @Output() tooltipEvent = new EventEmitter<any>();
  @Output() tooltipHide = new EventEmitter<any>();

  constructor(private quoteService: ChartConfigService, private tooltipComponent: CustomTooltipComponent) {
  }

  private margin: any = {};
  private container: any = {};
  private x: any;
  private y: any;
  private svg: any;
  private data: any;
  private barGroup: any = {};
  private legend: any;
  private xAxis: any = {};
  private yAxis: any = {};
  private color: any = [];
  private isPrem: any;
  private total: string;
  private sold: string;
  private chartType: string;
  private chart;

  public showTip = false;

  ngOnChanges(): void {
    if (this.data) {
      this.total = this.totalVal;
      this.sold = this.soldVal;
      this.data = this.barData;
      this.isPrem = this.isPremium;
      this.color = this.colorVal;
      this.chartInit();
    }
  }


  ngOnInit(): any {
    this.margin = {top: 20, right: 20, bottom: 30, left: 50};
    this.total = this.totalVal;
    this.sold = this.soldVal;
    this.isPrem = this.isPremium;
    this.color = this.colorVal;
    this.chartType = 'bar';

    setTimeout(() => {
      this.data = this.barData;
      if (this.attachNode !== 'timeline') {
        this.container = this.quoteService.sizeContainers('organization');
      } else {
        this.container = {};
        this.container = this.quoteService.sizeContainers('timeline');
      }
      this.chartInit();
    }, 200);
  }


// Call parent function to reset to single on click
  private resetBarChart(filter) {
    this.resetEvent.next(filter);
  }


// Call parent function to show tooltip
  private showTooltip(values, x, y) {
    console.log('showTooltip ', y);
    this.tooltipEvent.next({values: values, x: x, y: y});
  }

  // Call parent function to show tooltip
  private hideTooltip() {
    this.tooltipHide.next();
  }


  private chartInit() {
    this.barData.forEach((d, i) => {
      if (d.key === 'undefined') {
        this.barData.splice(i, 1);
      }
    });

    if (this.attachNode !== 'timeline') {
      this.sortData(this);
    }

    this.initSettings(this);
    this.drawSVG(this);
    this.drawRect(this.total, this.color[0], this);
    this.drawRect(this.sold, this.color[1], this);
    this.drawLegend(this.legend, 20, 0, this.color[0], this.total);
    this.drawLegend(this.legend, 20, 25, this.color[1], this.sold);
    this.initializeEvents(this);
  }


  // sort data descending
  private sortData(element): any {
    let thisData = [];
    thisData = element.data.sort((a, b) => {
      return b.values[element.total] - a.values[element.total];
    });
  }


  // settings for the line chart layout (x/y axis, svg line definition)
  private initSettings(parent) {

    const x: any = d3.scaleBand()
      .rangeRound([0, this.container.width]);
    const y: any = d3.scaleLinear()
      .range([this.container.height, 0]);
    const xAxis = d3.axisBottom(x)
      .tickFormat((d: any) => {
        return d as any;
      })
      .scale(x);
    const yAxis = d3.axisLeft(y)
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
    x.domain(this.data.map(function (d: any) {

      return d.key;
    }));
    y.domain([0, d3.max(this.data, function (d: any) {
      return d.values[parent.total];
    })]);

    this.x = x;
    this.y = y;
    this.xAxis = xAxis;
    this.yAxis = yAxis;
  }


  private drawSVG(parent) {
    d3.select('#' + this.attachNode).select('svg').remove();
    d3.select('#' + this.attachNode).select('table').remove();

    this.svg = d3.select('#' + this.attachNode)
      .append('center')
      .append('svg')
      .attr('id', 'bar-chart')
      .attr('width', this.container.width - this.margin.left - this.margin.right)
      .attr('height', this.container.height + this.margin.top + this.margin.bottom)
      .attr('viewBox', '0, 0, ' + (this.container.width + this.margin.left + this.margin.right) +
        ', ' + (this.container.height + this.margin.top + this.margin.bottom));

    const chart = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // create the y axis
    const axisY = chart.append('g')
      .call(this.yAxis);

    axisY.select('path')
      .attr('class', 'axis-path');

    axisY.selectAll('g.tick text')
      .attr('class', 'axis-text');


    // create the x axis
    const axisX = chart.append('g')
      .attr('transform', 'translate(0,' + this.container.height + ')')
      .call(this.xAxis);

    axisX.select('path')
      .attr('class', 'axis-path');

    axisX.selectAll('g.tick text')
      .attr('class', 'axis-text');


    // lengthen odd Y axis label ticks for staggering labels
    axisX.selectAll('g.tick line')
      .attr('class', 'axis-tick')
      .attr('y2', function (d: any, i) {
        return (i % 2) ? 14 : 5;
      })
      .attr('opacity', (d, i) => {
        let o: number;
        if (parent.data.length > 30) {
          o = (i % 4) ? 0 : 1;
        } else {
          o = 1;
        }
        return o;
      });


    // stagger odd Y axis labels so labels don't overlap
    axisX.selectAll('g.tick text')
      .attr('class', 'axis-text')
      .attr('y', (d: any, i) => {
        return (i % 2) ? 20 : 6;
      })
      .attr('opacity', function (d, i) {
        let o: number;
        if (parent.data.length > 30) {
          o = (i % 4) ? 0 : 1;
        } else {
          o = 1;
        }
        return o;
      });


    chart.selectAll('line.horizontalGrid')
      .data(parent.y.ticks).enter()
      .append('line')
      .attr('class', 'horizontalGrid')
      .attr('x1', 0)
      .attr('x2', this.container.width)
      .attr('y1', function (d) {
        return parent.y(d);
      })
      .attr('y2', function (d) {
        return parent.y(d);
      });


    const barGroup = chart.selectAll('.bar-group')
      .data(this.data)
      .enter().append('g')
      .attr('class', 'bar-group')
      .attr('x', function (d) {
        return parent.x(d.key);
      })
      .attr('height', function (d) {
        return parent.container.height;
      })
      .attr('y', 0);


    // create a group for the chart legend
    let legend = this.svg.append('g')
      .attr('class', 'legend')
      .attr('transform', 'translate(' + this.margin.left + ', 0)');


    //  create a group for the chart key
    legend = legend.append('g')
      .attr('class', 'key')
      .attr('transform', 'translate(' + (this.container.width - 190) + ', -30)');


    legend.append('rect')
      .attr('height', 50)
      .attr('width', 196)
      .attr('x', 0)
      .attr('class', 'legend-back')

    this.chart = chart;
    this.barGroup = barGroup;
    this.legend = legend;
  }

// Draw chart rectangles -
  private drawRect(values, color, parent) {
    this.barGroup.append('rect')
      .attr('class', 'bar')
      .attr('fill', color)
      .attr('opacity', 1)
      .attr('x', function (d) {
        return parent.x(d.key);
      })
      .attr('y', (d) => {
        return parent.y(0);
      })
      .attr('width', parent.x.bandwidth() * .8)
      .attr('height', 0)
      .transition()
      .duration(500)
      .attr('height', function (d: any) {
        return parent.container.height - parent.y(d.values[values]);
      })
      .attr('y', function (d: any) {
        return parent.y(d.values[values]);
      });
  }


  private initializeEvents(parent) {
    this.barGroup
      .on('click', (d: any, i) => {
        const drilldownFilter = {key: d.key, values: d.values};
        parent.hideTooltip();
        parent.resetBarChart(drilldownFilter);
      })
      .on('mousemove', (d, i) => {
       // console.log('x ', parent.quoteService.mouse.x);
        parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
      })
      .on('mouseleave', () => {
        parent.hideTooltip();
      });
  }

  private drawLegend(legend, offsetX, offsetY, color, values) {
    legend.append('rect')
      .attr('height', 14)
      .attr('width', 14)
      .attr('x', 2)
      .attr('y', offsetY)
      .attr('fill', color);

    legend.append('text')
      .attr('dy', '.8em')
      .attr('x', offsetX)
      .attr('y', offsetY)
      .text(values);
  }

}


