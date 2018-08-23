import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
} from '@angular/core';
import { ChartConfigService } from '../../services/chart-config.service';
import { CustomTooltipComponent } from '../../../shared/components/custom-tooltip/custom-tooltip.component';

import * as d3 from 'd3';
import * as $ from 'jquery';
import { IChartMargin } from '../../interfaces/Filters';

@Component({
    selector: 'pie',
    styleUrls: ['./pie.component.scss', '../drilldown-common.scss'],
    templateUrl: './pie.component.html',
    providers: [ChartConfigService, CustomTooltipComponent],
    // encapsulation: ViewEncapsulation.None,
})
export class PieChartComponent implements OnInit, OnChanges {
    private margin: IChartMargin = { top: 20, right: 20, bottom: 30, left: 50 };
    private container: any;
    private x: any;
    private y: any;
    private svg: any;

    private data: any;
    private arcGroup: any;
    private key: any;
    private isPrem: any;
    private total: string;
    private sold: string;
    private color: any[];
    private arc: any;
    private pie: any;
    private arcLabel: any;
    private sum: number;
    private legendKey: any;
    private chartType: string;
    private colors = [
        'Blue ',
        'LimeGreen',
        'Red',
        'OrangeRed',
        'Indigo',
        'Yellow',
        'DarkMagenta',
        'Orange',
        'Crimson',
        'DeepSkyBlue',
        'DeepPink',
        'LightSeaGreen',
    ];

    private outerArc;
    private radius = 0;

    @Input()
    pieData: any[];
    @Input()
    dropdownSelectors;
    @Input()
    attachNode: any;
    @Input()
    isPremium: any;
    @Input()
    totalVal: any;
    @Input()
    soldVal: any;

    @Output()
    resetEvent = new EventEmitter<any>();
    @Output()
    tooltipEvent = new EventEmitter<any>();
    @Output()
    tooltipHide = new EventEmitter<any>();

    constructor(private quoteService: ChartConfigService) {}

    ngOnChanges(): void {
        if (this.data) {
            this.data = [];
            this.data = this.pieData;
            setTimeout(() => {
                this.total = this.totalVal;
                this.sold = this.soldVal;
                this.isPrem = this.isPremium;
                this.initChart(this);
                this.drawLegend(this);
                this.initializeEvents(this);
                console.log('this.isPremium ', this.isPremium);
            }, 0);
        }
    }

    ngOnInit() {
        this.chartType = 'pie';
        this.key = 'Billing Mode';
        this.total = 'Number of Quotes';
        this.sold = 'Number of Quotes Sold';

        setTimeout(() => {
            this.data = this.pieData;
            this.container = this.quoteService.sizeContainers('variable');

            if (this.pieData) {
                this.data = this.pieData;
            }
            this.chartInit();
            this.initChart(this);
            this.drawLegend(this);
            this.initializeEvents(this);
        }, 0);
    }

    // Call parent function to show tooltip
    private showTooltip(values, x, y) {
        this.tooltipEvent.next({ values: values.data, x: x + 30, y: y });
    }

    // Call parent function to show tooltip
    private hideTooltip() {
        this.tooltipHide.next();
    }

    private chartInit() {
        this.pieData.forEach((d, i) => {
            if (d.key === 'undefined') {
                this.pieData.splice(i, 1);
            }
        });
    }

    // call parent function to reset to single on click
    private resetPieChart(value) {
        this.resetEvent.next(value);
    }

    initChart(parent) {
        d3.select('#' + this.attachNode)
            .select('svg')
            .remove();
        d3.select('#' + this.attachNode)
            .select('table')
            .remove();
        this.container = this.quoteService.sizeContainers('variable');
        const svg = d3
            .select('#' + this.attachNode)
            .append('center')
            .append('svg')
            .attr('width', this.container.width - this.margin.left - this.margin.right)
            .attr('height', this.container.height + this.margin.top + this.margin.bottom)
            .attr(
                'viewBox',
                '0, 0, ' +
                    (this.container.width + this.margin.left + this.margin.right) +
                    ', ' +
                    (this.container.height + this.margin.top + this.margin.bottom),
            )
            .append('g');

        svg.append('g').attr('class', 'legend');
        svg.append('g').attr('class', 'slices');
        svg.append('g').attr('class', 'labels');
        svg.append('g').attr('class', 'lines');

        this.radius = Math.min(this.container.width, this.container.height) / 2;

        const pie = d3
            .pie()
            .sort(null)
            .value(function(d) {
                return d.values[parent.total];
            });

        const arc = d3
            .arc()
            .outerRadius(this.radius * 0.8)
            .innerRadius(this.radius * 0.3)
            .cornerRadius(3)
            .padAngle(0.1);

        const outerArc = d3
            .arc()
            .innerRadius(this.radius * 0.9)
            .outerRadius(this.radius * 0.9);

        svg.attr(
            'transform',
            'translate(' + this.container.width / 1.8 + ',' + this.container.height / 1.55 + ')',
        );

        const color = d3.scaleOrdinal().range(this.colors);

        this.svg = svg;
        this.pie = pie;
        this.arc = arc;
        this.outerArc = outerArc;
        this.color = color;
        this.change(this.data, this);

        d3.select(window).on('load', parent.change(this.data, parent));
    }

    change(data, parent) {
        const slice = this.svg
            .select('.slices')
            .selectAll('path.slice')
            .data(this.pie(this.data));

        slice
            .enter()
            .append('path')
            .attr('class', 'slice');

        slice
            .transition()
            .duration(0)
            .attrTween('d', function(d) {
                this._current = this._current || d;
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    return parent.arc(interpolate(t));
                };
            })
            .style('fill', function(d, i) {
                return parent.color(d.data.key);
            });

        this.arcGroup = slice;
        slice.exit().remove();

        const text = this.svg
            .select('.labels')
            .selectAll('text')
            .data(this.pie(this.data));

        text.enter()
            .append('text')
            .style('fill', 'black')
            .attr('dy', '.35em')
            .text(function(d) {
                return d.data.key + 'values';
            });

        function midAngle(d) {
            return d.startAngle + (d.endAngle - d.startAngle) / 2;
        }

        text.transition()
            .duration(500)
            .attrTween('transform', function(d) {
                // if (d.data.values[parent.total] > 20) {
                console.log('transform ', d);

                this._current = this._current || d;

                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    const d2 = interpolate(t);
                    const pos = parent.outerArc.centroid(d2);
                    pos[0] = parent.radius * (midAngle(d2) < Math.PI ? 1 : -1);
                    return 'translate(' + pos + ')';
                };
                // }
            })
            .text(function(d, i) {
                if (parent.isPrem) {
                    return d.data.key + ':  ' + parent.setValueFormat(d.data.values[parent.total]);
                } else {
                    return d.data.key + ':  ' + parent.setValueFormat(d.data.values[parent.sold]);
                }
            })
            .styleTween('text-anchor', function(d) {
                this._current = this._current || d;
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    const d2 = interpolate(t);
                    return midAngle(d2) < Math.PI ? 'start' : 'end';
                };
            });

        text.exit().remove();

        const polyline = this.svg
            .select('.lines')
            .selectAll('polyline')
            .data(this.pie(this.data));

        polyline
            .enter()
            .append('polyline')
            .style('fill', 'none')
            .style('stroke', 'black')
            .style('opacity', 0.6)
            .style('stroke-width', '2px');

        polyline
            .transition()
            .duration(500)
            .attrTween('points', function(d) {
                this._current = this._current || d;
                const interpolate = d3.interpolate(this._current, d);
                this._current = interpolate(0);
                return function(t) {
                    const d2 = interpolate(t);
                    const pos = parent.outerArc.centroid(d2);
                    pos[0] = parent.radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
                    return [parent.arc.centroid(d2), parent.outerArc.centroid(d2), pos];
                };
            });

        polyline.exit().remove();
    }

    setValueFormat(params) {
        if (this.isPrem) {
            return '$' + params.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } else {
            return params;
        }
    }

    private initSettings(parent) {
        const radius: number = Math.min(this.container.width, this.container.height) / 2;
        const labelr: number = radius - 30;
        const arc = d3
            .arc()
            .outerRadius(radius)
            .innerRadius(0);
        // labels fit on the slices
        const arcLabel = function(arc) {
            const c = arc,
                x = c[0],
                y = c[1],
                h = Math.sqrt(x * x + y * y), // pythagorean theorem for hypotenuse
                labelX = (x / h) * labelr,
                labelY = (y / h) * labelr;
            return { x: labelX, y: labelY };
        };

        // TODO  moneyformat @pipe

        // const sum: number = d3.sum(parent.data, function(d: any) {
        //         //     const n = d.values[parent.total];
        //         //     const moneyFormat = function(n, currency) {
        //         //         console.log('moneyFormat ', moneyFormat);
        //         //         return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        //         //     };
        //         //     return d.values[parent.total];
        //         // });
        this.arc = arc;
        this.arcLabel = arcLabel;
        // this.sum = sum;
    }

    private drawSVG(parent) {
        const radius = Math.min(this.container.width, this.container.height) / 2;
        const color = d3.scaleOrdinal().range(this.color);

        const arc = d3
            .arc()
            .outerRadius(radius - 6)
            .innerRadius(radius - 80)
            .padAngle(0.04);

        const pie = d3
            .pie()
            .sort(null)
            .startAngle(1.1 * Math.PI)
            .endAngle(3.1 * Math.PI)
            .value(function(d: any) {
                return d.values[parent.total];
            });

        d3.select('#' + this.attachNode)
            .select('svg')
            .remove();
        d3.select('#' + this.attachNode)
            .select('table')
            .remove();

        const svg = d3
            .select('#' + this.attachNode)
            .append('center')
            .append('svg');

        this.svg = svg;

        const chart = svg.append('g').attr('class', 'pie');

        const arcGroup: any = chart
            .selectAll('.arc')
            .data(pie(this.data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        const pieSlice = arcGroup
            .append('path')
            .style('fill', (d: any) => {
                return color(d.data.key);
            })
            .attr('class', 'slice')
            .transition()
            .delay(function(d, i) {
                return i * 200;
            })
            .duration(100)
            .attr('d', this.arc)
            .attrTween('d', function(d) {
                const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                return function(t) {
                    d.endAngle = i(t);
                    return arc(d);
                };
            });

        // label
        let label = arcGroup
            .append('text')
            .attr('class', 'pieLabel')
            .attr('transform', function(d) {
                label = parent.arcLabel(parent.arc.centroid(d));
                return 'translate(' + label.x + ',' + label.y + ')';
            })
            .attr('text-anchor', 'middle');

        // label
        //     .append('tspan')
        //     .attr('x', 0)
        //     .attr('dy', '1em')
        //     .attr('fill', 'red')
        //     .text(function(d: any) {
        //         if (Math.round((d.value / parent.sum) * 100) > 2) {
        //             if (parent.isPrem) {
        //                 const amount = Math.round(d.value),
        //                     M = amount / 1000000,
        //                     K = amount / 1000;
        //                 if (M >= 1) {
        //                     return '$' + M.toFixed(2) + 'M';
        //                 } else if (K >= 1) {
        //                     return '$' + Math.round(K) + 'K';
        //                 } else {
        //                     return '$' + amount;
        //                 }
        //             } else {
        //                 return d.value;
        //             }
        //         } else {
        //             return '';
        //         }
        //     });

        this.pie = pie;
        this.svg = svg;
        this.arcGroup = arcGroup;
    }

    private drawLegend(parent) {
        const legend = this.svg
            .append('g')
            .attr('class', 'legend')
            .attr('transform', 'translate(' + this.container.height + ', -180)');

        let j = 0;
        const offset = 20;

        // key
        const key = legend
            .selectAll('.key')
            .data(this.pie(this.data))
            .enter()
            .append('g')
            .attr('class', 'key')
            .attr('transform', function(d, i) {
                const limit = Math.ceil(parent.container.height / offset);
                console.log('limit ', limit);
                if (i >= limit) {
                    j++;
                    return 'translate(130, ' + offset * j + ')';
                } else {
                    return 'translate(80, ' + offset * (i + 1) + ')';
                }
            });

        key.append('rect')
            .attr('height', offset)
            .attr('width', 180)
            .attr('x', -20)
            .attr('y', 0)
            .attr('class', 'legend-back');

        key.append('rect')
            .attr('height', 16)
            .attr('width', 16)
            .attr('fill', function(d) {
                return parent.color(d.data.key);
            });

        key.append('text')
            .attr('dy', '.9em')
            .attr('x', offset - 2)
            .text(function(d) {
                let key = d.data.key;
                const len = key.length;
                const limit = Math.ceil(parent.container.height / offset);
                if (parent.data.length > limit) {
                    j++;
                    if (len > 10) {
                        key = key.substr(0, 10) + '...';
                    }
                }
                return key;
            });
        this.legendKey = key;
    }

    private initializeEvents(parent) {
        this.arcGroup
            .on('mousemove', (d, i) => {
                parent.showTooltip(d, parent.quoteService.mouse.x, parent.quoteService.mouse.y);
            })
            .on('mouseleave', () => {
                parent.hideTooltip();
            })
            .on('click', function(d: any) {
                parent.hideTooltip();

                const filter = { key: d.data.key, values: d.data.values };
                parent.resetPieChart(filter);
            });
    }
}
