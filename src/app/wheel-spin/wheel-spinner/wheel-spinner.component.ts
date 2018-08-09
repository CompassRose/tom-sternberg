import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-wheel-spinner',
  templateUrl: './wheel-spinner.component.html',
  styleUrls: ['./wheel-spinner.component.scss']
})
export class WheelSpinnerComponent implements OnInit {

  wheelData: any[] = [];
  color: any[] = [];
  container: any;
  rotation: number;
  oldrotation: number;
  picked: number;
  oldpick: number[] = [];
  public wheel;
  public resultsValue: number;

  @Output() tooltipEvent = new EventEmitter<any>();

  constructor() {

    this.wheelData = [
      {'label': '1', 'value': 1,  'Prize': '$150'},
      {'label': '2', 'value': 1,  'Prize': '$50'},
      {'label': '3', 'value': 1,  'Prize': '$1500'},
      {'label': '4', 'value': 1,  'Prize': '$50'},
      {'label': '5', 'value': 1,  'Prize': '$150'},
      {'label': '6', 'value': 1,  'Prize': '$2500'},
      {'label': '7', 'value': 1,  'Prize': '$500'},
      {'label': '8', 'value': 1,  'Prize': '$1500'},
      {'label': '9', 'value': 1,  'Prize': '$250'},
      {'label': '10', 'value': 1, 'Prize': '$1500'},
      {'label': '11', 'value': 1, 'Prize': '$500'},
      {'label': '12', 'value': 1, 'Prize': '$100'},
      {'label': '13', 'value': 1, 'Prize': '$1500'},
      {'label': '14', 'value': 1, 'Prize': '$350'},
      {'label': '15', 'value': 1, 'Prize': '$250'},
      {'label': '16', 'value': 1, 'Prize': '$500'},
      {'label': '17', 'value': 1, 'Prize': '$500'},
      {'label': '18', 'value': 1, 'Prize': '$100'},
      {'label': '19', 'value': 1, 'Prize': '$1500'},
      {'label': '20', 'value': 1, 'Prize': '$350'},
      {'label': '21', 'value': 1, 'Prize': '$250'},
      {'label': '22', 'value': 1, 'Prize': '$500'},
      {'label': '23', 'value': 1, 'Prize': '$250'},
      {'label': '24', 'value': 1, 'Prize': '$500'},
      {'label': '25', 'value': 1, 'Prize': '$250'},
      {'label': '26', 'value': 1, 'Prize': '$500'},
      {'label': '27', 'value': 1, 'Prize': '$500'},
      {'label': '28', 'value': 1, 'Prize': '$100'},
      {'label': '29', 'value': 1, 'Prize': '$1500'},
      {'label': '30', 'value': 1, 'Prize': '$350'},
      {'label': '31', 'value': 1, 'Prize': '$250'},
      {'label': '32', 'value': 1, 'Prize': '$500'},
      {'label': '33', 'value': 1, 'Prize': '$250'},
      {'label': '34', 'value': 1, 'Prize': '$500'},
      {'label': '35', 'value': 1, 'Prize': '$250'},
      {'label': '36', 'value': 1, 'Prize': '$500'}
    ];
  }


  ngOnInit() {
    console.log('wheelspin');
    this.color = [
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721',
      '#b3090a', '#fcc721', '#b3090a', '#fcc721'];

    const padding = {top: 16, right: 16, bottom: 16, left: 16};
    const w = 400 - padding.left - padding.right;
    const h = 400 - padding.top - padding.bottom;
    const r = Math.min(w, h) / 2;
    this.picked = 100000;
    this.oldpick = [];
    this.rotation = 0;
    this.oldrotation = 0;

    const parent = this;

    const svg = d3.select('#chart')
      .append('svg')
      .data([this.wheelData])
      .attr('width', w + padding.left + padding.right)
      .attr('height', h + padding.top + padding.bottom);


    const container = svg.append('g')
      .attr('class', 'chartholder')
      .attr('transform', 'translate(' + ( w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')')


    const wheel = container
      .append('g');


    const pie = d3.pie()
      .sort(null)
      .value(function (d) {
        return 1;
      });



    // arc generator function
    const arc = d3.arc()
      .outerRadius(r)
      .innerRadius(r * .35)
      .padRadius(100)
      .padAngle(0.0)
      .cornerRadius(0);


    // select paths, use arc generator to draw
    const arcs = wheel.selectAll('g.slice')
      .data(pie)
      .enter()
      .append('g')
      .attr('class', 'slice');

    arcs.append('path')
      .attr('fill', (d, i) => {
        return this.color[i];
      })

      .attr('d', function (d, i) {
        return arc(d);
      });


    const arcBorder = d3.arc()
      .innerRadius(r)
      .outerRadius(r);


    arcs.append('path')
      .attr('d', arcBorder)
      .attr('stroke-dasharray', 8)
      .attr('stroke-width', 3)
      .attr('stroke-linecap', 'round')
      .attr('stroke', '#faf2e3')
      .attr('stroke-opacity', 0.5);


    // add the text
    arcs.append('text').attr('transform', (d) => {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return 'rotate(' + ( d.angle * 180 / Math.PI - 90) + ')translate(' + ( d.outerRadius - 10 ) + ')';
    })
      .attr('text-anchor', 'end')
      .attr('dy', '0.35em')
      .text((d, i) => {
        return d.data.label;
      })
      .style('font-size', '20px')
      .style('font-weight', '600');


    this.wheel = wheel;
    this.container = container;
    // This may be necessary so please leave for now?
    this.container.on('click', function (d: any) {
     parent.spin(parent);
    });


// // filters go in defs element
    const defs = svg.append('defs');


// create filter with id #drop-shadow
// height=130% so that the shadow is not clipped
    const filter = defs.append('filter')
      .attr('id', 'drop-shadow')
      .attr('height', '130%');

// SourceAlpha refers to opacity of graphic that this filter will be applied to
// convolve that with a Gaussian with standard deviation 3 and store result
// in blur
    filter.append('feGaussianBlur')
      .attr('in', 'SourceAlpha')
      .attr('stdDeviation', 3)

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
    filter.append('feOffset')
      .attr('dx', 3)
      .attr('dy', 3)
      .attr('result', 'offsetBlur');

// Control opacity of shadow filter
    const feTransfer = filter.append('feComponentTransfer');

    feTransfer.append('feFuncA')
      .attr('type', 'linear')
      .attr('slope', 0.7)

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
    const feMerge = filter.append('feMerge');

    feMerge.append('feMergeNode')
    feMerge.append('feMergeNode')
      .attr('in', 'SourceGraphic');

  }


  public spinFromBtn() {
    this.spin(this);
  }


  // Click Container
  private spin(parent) {
    // all slices have been seen, all done
    // Only allow single spin temp;
    parent.container.on('click', null);
    //  End allow temp
    if (this.oldpick.length === this.wheelData.length) {
      parent.container.on('click', null);
      return;
    }

    const ps = 360 / this.wheelData.length;
    // let  pieslice = Math.round(1440/this.wheelData.length);
    const rng = Math.floor((Math.random() * 1440) + 360);
    this.rotation = (Math.round(rng / ps) * ps);
    this.picked = Math.round(this.wheelData.length - (this.rotation % 360) / ps);
    this.picked = this.picked >= this.wheelData.length ? (this.picked % this.wheelData.length) : this.picked;

    if (this.oldpick.indexOf(this.picked) !== -1) {
      d3.select(this).call(this.spin);
      return;
    } else {
      this.oldpick.push(this.picked);
    }
    this.rotation += 90 - Math.round(ps / 2);



    this.wheel.transition()
      .duration(6000)
      .attrTween('transform', () => {
        parent.rotTween();
      })
      .attrTween('transform', parent.rotTween)
      .on('end', () => {
        this.resultsValue = this.wheelData[parent.picked].label;
        this.showTooltip(this.resultsValue);
        d3.select('.slice:nth-child(' + (parent.picked + 1) + ') path')
          .attr('fill', 'crimson')
          .style('stroke-width', '3px');
        d3.select('.prize')
          .style('opacity', 1)
          .style('margin-left', '15px')
          .text(this.wheelData[parent.picked].label);
        parent.oldrotation = parent.rotation;
        // this.container.on('click', function (d: any) {
        //   parent.spin(d, parent);
        // });
      });
  }

// Call parent function to show tooltip
  private showTooltip(value) {
    console.log('showTooltip ', this.resultsValue);
    this.tooltipEvent.next({value});
  }


  rotTween() {
    const i = d3.interpolate(0, 1200);
    return function (t) {
      return 'rotate(' + i(t) + ')';
    };
  }

}


