import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-wheel-spinner',
    templateUrl: './wheel-spinner.component.html',
    styleUrls: ['./wheel-spinner.component.scss']
})
export class WheelSpinnerComponent implements OnInit {
    wheelData: any[] = [];
    color = ['red', '#000'];
    container: any;
    rotation: number;
    oldrotation: number;
    picked: number;
    oldpick: number[] = [];
    public wheel;
    public resultsValue = 0;
    public spinShow = true;

    @Output()
    spinResultsEvent = new EventEmitter<any>();

    constructor() {
        this.wheelData = [
            { label: '1', value: 1, Prize: '$150' },
            { label: '2', value: 1, Prize: '$50' },
            { label: '3', value: 1, Prize: '$1500' },
            { label: '4', value: 1, Prize: '$50' },
            { label: '5', value: 1, Prize: '$150' },
            { label: '6', value: 1, Prize: '$2500' },
            { label: '7', value: 1, Prize: '$500' },
            { label: '8', value: 1, Prize: '$1500' },
            { label: '9', value: 1, Prize: '$250' },
            { label: '10', value: 1, Prize: '$1500' },
            { label: '11', value: 1, Prize: '$500' },
            { label: '12', value: 1, Prize: '$100' },
            { label: '13', value: 1, Prize: '$1500' },
            { label: '14', value: 1, Prize: '$350' },
            { label: '15', value: 1, Prize: '$250' },
            { label: '16', value: 1, Prize: '$500' },
            { label: '17', value: 1, Prize: '$500' },
            { label: '18', value: 1, Prize: '$100' },
            { label: '19', value: 1, Prize: '$1500' },
            { label: '20', value: 1, Prize: '$350' },
            { label: '21', value: 1, Prize: '$250' },
            { label: '22', value: 1, Prize: '$500' },
            { label: '23', value: 1, Prize: '$250' },
            { label: '24', value: 1, Prize: '$500' },
            { label: '25', value: 1, Prize: '$250' },
            { label: '26', value: 1, Prize: '$500' },
            { label: '27', value: 1, Prize: '$500' },
            { label: '28', value: 1, Prize: '$100' },
            { label: '29', value: 1, Prize: '$1500' },
            { label: '30', value: 1, Prize: '$350' },
            { label: '31', value: 1, Prize: '$250' },
            { label: '32', value: 1, Prize: '$500' },
            { label: '33', value: 1, Prize: '$250' },
            { label: '34', value: 1, Prize: '$500' },
            { label: '35', value: 1, Prize: '$250' },
            { label: '36', value: 1, Prize: '$500' }
        ];
    }

    ngOnInit() {
        this.resetSpinner();
    }

    // From spin button press
    public spinFromBtn() {
        this.spin(this);
    }

    private resetSpinner() {
        this.spinShow = true;
        const padding = { top: 16, right: 16, bottom: 16, left: 16 };
        const w = 400 - padding.left - padding.right;
        const h = 400 - padding.top - padding.bottom;
        const r = Math.min(w, h) / 2;
        this.picked = 100000;
        this.oldpick = [];
        this.rotation = 0;
        this.oldrotation = 0;

        const parent = this;

        d3.select('#chart')
            .select('svg')
            .remove();

        const svg = d3
            .select('#chart')
            .append('svg')
            .data([this.wheelData])
            .attr('width', w + padding.left + padding.right)
            .attr('height', h + padding.top + padding.bottom);

        const container = svg
            .append('g')
            .attr('class', 'chartholder')
            .attr(
                'transform',
                'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')'
            );

        const wheel = container.append('g');

        const pie = d3
            .pie()
            .sort(null)
            .value(function(d) {
                return 1;
            });

        // arc generator function
        const arc = d3
            .arc()
            .outerRadius(r)
            .innerRadius(r * 0.4)
            .padRadius(100)
            .padAngle(0.0)
            .cornerRadius(0);

        // select paths, use arc generator to draw
        const arcs = wheel
            .selectAll('g.slice')
            .data(pie)
            .enter()
            .append('g')
            .attr('class', 'slice');

        arcs.append('path')
            .attr('fill', (d, i) => {
                if (i % 2) {
                    return this.color[1];
                } else {
                    return this.color[0];
                }
            })

            .attr('d', function(d, i) {
                return arc(d);
            });

        const arcBorder = d3
            .arc()
            .innerRadius(r)
            .outerRadius(r);

        arcs.append('path')
            .attr('d', arcBorder)
            .attr('stroke-width', 2)
            .attr('stroke', '#ffc600')
            .attr('stroke-opacity', 1);

        // add the text
        arcs.append('text')
            .attr('transform', d => {
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle) / 2;
                return (
                    'rotate(' +
                    ((d.angle * 180) / Math.PI - 90) +
                    ')translate(' +
                    (d.outerRadius - 10) +
                    ')'
                );
            })
            .attr('text-anchor', 'end')
            .attr('dy', '0.35em')
            .text((d, i) => {
                return d.data.label;
            })
            .style('font-size', '20px')
            .style('fill', 'white')
            .style('font-weight', '600');

        this.wheel = wheel;
        this.container = container;
        // This may be necessary so please leave for now?
        this.container.on('click', function(d: any) {
            parent.spin(parent);
        });
    }

    // Click Container
    private spin(parent) {
        const ps = 360 / this.wheelData.length;
        const rng = Math.floor(Math.random() * 1440 + 360);
        this.rotation = Math.round(rng / ps) * ps;
        this.picked = Math.round(this.wheelData.length - (this.rotation % 360) / ps);
        this.picked =
            this.picked >= this.wheelData.length
                ? this.picked % this.wheelData.length
                : this.picked;
        if (this.oldpick.indexOf(this.picked) !== -1) {
            d3.select(this).call(this.spin);
            return;
        } else {
            this.oldpick.push(this.picked);
        }
        this.rotation += 90 - Math.round(ps / 2);

        this.wheel
            .transition()
            .duration(6000)
            .attrTween('transform', () => {
                parent.rotTween();
            })
            .attrTween('transform', parent.rotTween)
            .on('end', () => {
                this.resultsValue = this.wheelData[parent.picked].label;
                this.spinShow = false;
                this.showResults(this.resultsValue);
                d3.select('.slice:nth-child(' + (parent.picked + 1) + ') path')
                    .style('stroke-width', '4px')
                    .attr('stroke', '#0518ff')
                    .attr('stroke-opacity', 1);
                setTimeout(() => {
                    this.spinShow = true;
                    this.resetSpinner();
                }, 5000);
            });
    }

    // Call parent function to show winners
    showResults(value) {
        this.spinResultsEvent.next({ value });
    }

    rotTween() {
        const i = d3.interpolate(0, 1200);
        return function(t) {
            return 'rotate(' + i(t) + ')';
        };
    }
}
