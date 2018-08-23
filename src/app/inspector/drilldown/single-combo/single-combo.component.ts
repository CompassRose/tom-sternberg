import {
    Component,
    ChangeDetectionStrategy,
    OnInit,
    OnChanges,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { ChartConfigService } from '../../services/chart-config.service';
import * as d3 from 'd3';
import * as $ from 'jquery';
import { IChartMargin } from '../../interfaces/Filters';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'single-combo',
    templateUrl: './single-combo.component.html',
    styleUrls: ['./single-combo.component.scss'],
})
export class SingleComboComponent implements OnInit, OnChanges {
    private key: any;
    private data: any;
    private premiumData;
    private container;
    private isPrem: any;
    private sold: string;
    private margin: IChartMargin = { top: 20, right: 20, bottom: 30, left: 50 };
    private premium;
    private quotes;
    private radius;
    private pie;
    private arc;
    private arcLabel;
    private table;
    private color = ['#3f51b5', '#00b862', '#ff5722', '#2196f3', '#eeeb0c', '#ff9800', '#ff4514'];
    private initialized = false;

    @Input()
    singleData;
    @Input()
    attachNode: any;
    @Input()
    isPremium: any;
    @Input()
    singleTitle: any;
    @Input()
    hasChanged: any;

    constructor(private quoteService: ChartConfigService) {}

    ngOnChanges(): void {
        if (this.initialized) {
            this.key = this.singleTitle;
            this.isPrem = this.isPremium;
            this.data = this.singleData;
            this.chartInit();
        }
    }

    ngOnInit() {
        if (!this.initialized) {
            this.margin = { top: 10, right: 40, bottom: 35, left: 40 };

            if (this.attachNode === 'organization') {
                this.container = this.quoteService.sizeContainers('organization');
            } else if (this.attachNode === 'variable') {
                this.container = this.quoteService.sizeContainers('variable');
            } else if (this.attachNode === 'timeline') {
                this.container = this.quoteService.sizeContainers('timeline');
            }
            setTimeout(() => {
                this.data = this.singleData;
                this.key = this.singleTitle;
                this.isPrem = this.isPremium;
                this.chartInit();
            }, 0);
        }
        this.initialized = true;
    }

    private chartInit() {
        this.initChart(this);
        this.initSettings(this);
        this.drawSVG(this);
    }

    private initChart(parent) {
        const q: number = this.data[0].values['Number of Quotes'];
        const qS: number = this.data[0].values['Number of Quotes Sold'];
        const p = this.data[0].values['Total Premium Quoted'];
        const pS = this.data[0].values['Total Premium Sold'];

        this.premium = p;
        this.quotes = q;

        const data: any = {
            quotes: [],
            premium: [],
        };

        data.quotes.push(q - qS);
        data.quotes.push(qS);
        data.premium.push(p - pS);
        data.premium.push(pS);
        this.premiumData = data;
    }

    private initSettings(parent) {
        const radius: any = Math.min(this.container.width, this.container.height) / 4,
            labelr = radius - 40;

        const pie: any = d3
            .pie()
            .value(function(d: any) {
                return d;
            })
            .sort(null);

        const arc: any = d3
            .arc()
            .outerRadius(radius)
            .innerRadius(0);

        const arcLabel: any = function(arc) {
            const c = arc,
                x = c[0],
                y = c[1],
                h = Math.sqrt(x * x + y * y), // pythagorean theorem for hypotenuse
                labelX = (x / h) * labelr,
                labelY = (y / h) * labelr;
            return { x: labelX, y: labelY };
        };

        const table: any = $('#' + this.attachNode);

        this.radius = radius;
        this.pie = pie;
        this.arc = arc;
        this.arcLabel = arcLabel;
        this.table = table;
    }

    private drawSVG(parent) {
        d3.select('#' + this.attachNode)
            .select('svg')
            .remove();
        d3.select('#' + this.attachNode)
            .select('table')
            .remove();

        const grid = d3
            .select('#' + this.attachNode)
            .append('center')
            .append('table')
            .attr('class', 'table table-hover');

        const headRow = grid.append('thead').append('tr');

        headRow
            .append('th')
            .attr('class', 'headerBold')
            .text(this.key);

        for (let i = 0; i < d3.keys(this.data[0].values).length; i++) {
            const key = d3.keys(this.data[0].values)[i];
            headRow
                .append('th')
                .attr('class', 'text-left')
                .attr('class', 'headerBold')
                .text(key.split('_').join(' '));
        }

        const tbody = grid.append('tbody').attr('class', 'borderedCell');

        const row = tbody
            .selectAll('tr')
            .data(this.data)
            .enter()
            .append('tr')
            .on('click', function(d) {
                // var filter = { key: self.key, value: d.key };
                // self.root.addFilter(filter, true);
                // if (self.id === 'prospects' || self.id === 'timeline') {
                //   self.parent.skipField();
                // }
            });

        row.append('td')
            .attr('class', 'text-left')
            .attr('class', 'dataRow')
            .style('fill', 'white')
            .text(function(d: any) {
                return d.key;
            });

        for (let i = 0; i < d3.keys(this.data[0].values).length; i++) {
            const key = d3.keys(this.data[0].values)[i],
                moneyFormat = function(n, currency) {
                    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                },
                isTotal = function(key) {
                    return key.indexOf('Total') !== -1;
                };
            row.append('td')
                .attr('class', 'dataRow text-left')
                .text(function(d: any) {
                    return isTotal(key) ? moneyFormat(d.values[key], '$') : d.values[key];
                });
        }

        // Pie charts attach
        const svg = d3
            .select('#' + this.attachNode)
            .append('svg')
            .attr('width', this.container.width + this.margin.left + this.margin.right)
            .attr('height', this.container.height - this.table.height())
            .attr(
                'viewBox',
                '0, 0, ' +
                    (this.container.width + this.margin.left + this.margin.right) +
                    ', ' +
                    (this.container.height - this.table.height()),
            );

        // console.log('this.table.height() ', this.table.height());
        for (let j = 0; j < d3.keys(this.premiumData).length; j++) {
            const isPrem: any = j === 0 ? false : true;
            const color = this.color;
            const chart: any = svg
                .append('g')
                .attr('class', 'pie')
                .attr('transform', function() {
                    const x = parent.container.width / (2.5 - j) - parent.radius / 2;
                    const y = parent.radius + 10;
                    return 'translate(' + x + ',' + y + ')';
                });

            const g = chart
                .selectAll('.arc')
                .data(function() {
                    const val = isPrem ? parent.premiumData.premium : parent.premiumData.quotes;
                    return parent.pie(val);
                })
                .enter()
                .append('g')
                .attr('class', 'arc');

            // pie slice
            g.append('path')
                .attr('class', 'slice no-hover')
                .attr('fill', function(d, i) {
                    return parent.color[i];
                })
                // .attr('stroke', 'white')
                .attr(
                    'd',
                    d3
                        .arc()
                        .outerRadius(0)
                        .innerRadius(0),
                )
                .transition()
                .duration(20)
                .attr('d', this.arc);

            // label % of quotes
            const label = g
                .append('text')
                .attr('class', 'pieLabel')
                .attr('transform', function(d) {
                    const label = parent.arcLabel(parent.arc.centroid(d));
                    return 'translate(' + label.x + ',' + label.y + ')';
                })
                .attr('text-anchor', 'middle')
                .text(function(d, i) {
                    if (i === 1) {
                        const val = isPrem ? parent.premium : parent.quotes,
                            percent = Math.round((d.value / val) * 100);
                        return percent + '%';
                    }
                    return '';
                });

            // Percent premium
            chart
                .append('text')
                .attr('class', 'title')
                .attr('x', -70)
                .attr('y', function() {
                    return parent.radius + 25;
                })
                .text(function() {
                    const t = isPrem ? 'Premium' : 'Quotes';
                    return '% of ' + t + ' sold';
                });
        }
    }
}
