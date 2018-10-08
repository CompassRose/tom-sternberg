import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { ParentalService } from '../services/ptree.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as d3 from 'd3';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
  providers: [PictureService, ParentalService]
})
export class FamilyTreeComponent implements OnInit {
  myDataFile;
  tree;
  svg;
  margin;
  width;
  height;
  parent;

  constructor(private _pictureService: PictureService, private parentalService: ParentalService) {}

  ngOnInit() {
    this.parent = this;
    const d = document,
      e = d.documentElement,
      w = 1600,
      h = 400;

    this.width = 1600;
    this.height = 800;

    this.parentalService.getDescendantData().subscribe(res => {
      this.myDataFile = res;
      console.log('this.myDataFile ', this.myDataFile);
      this.draw();
    });
  }

  draw() {
    this.tree = d3.cluster().size([this.height, this.width - 300]);

    let svg = d3
      .select('#treechart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    svg = d3
      .select('#treechart')
      .select('svg')
      .append('g')
      .attr('transform', 'translate(180,0)');
    const root = d3.hierarchy(this.myDataFile);

    this.tree(root);

    console.log('tree ', root.descendants().slice(1));

    const link = svg
      .selectAll('path.link')
      .data(root.descendants().slice(1))
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', this.parent.elbow);

    const node = svg
      .selectAll('g.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function(d: any) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    node
      .append('circle')
      .attr('stroke-width', 2)
      .attr('stroke', '#ffd300')
      .attr('fill', '#0e23ff')
      .attr('stroke-opacity', 1)
      .filter(function(d) {
        return d.data.name.length > 0;
      })
      .attr('r', 6);

    node
      .append('text')
      .filter(function(d) {
        return d.data.name.length > 0;
      })
      // .filter(function(d) {
      //   return d.data.spouseName.length > 0;
      // })
      .attr('dx', function(d) {
        return d.children ? -8 : 8;
      })
      .attr('class', 'textLabel')
      .attr('id', function(d, i) {
        return 'txt' + i;
      })
      .attr('dy', 3)
      .attr('text-anchor', function(d) {
        return d.children ? 'end' : 'start';
      })
      .text(function(d) {
        return d.data.name;
      });

    const objs = document.querySelectorAll('text.textLabel');
    const widths = [];

    for (let o = 0; o < objs.length; o++) {
      const obj = document.getElementById(objs[o].id);
      const bb = obj.getBoundingClientRect();
      // console.log('bb ', bb);
      widths.push(bb.width);
    }

    node
      .append('rect')
      .attr('stroke-width', 1)
      .attr('stroke', '#faf8ff')
      .attr('fill', 'steelblue')
      .attr('stroke-opacity', 1)
      .filter(function(d) {
        return d.data.name.length > 0;
      })
      .attr('x', function(d, i) {
        return d.children ? -1 * widths[i] - 12 : 9;
      })
      .attr('class', 'rectLabel')
      .attr('id', function(d, i) {
        return 'rect' + i;
      })
      .attr('y', -13)
      .attr('height', '25')
      .attr('width', function(d, i) {
        return widths[i] + 10;
      })
      .on('mouseover', function(d, i) {
        console.log('hello');
        d3.select(this).style('fill', 'yellow');
      })
      .on('mouseout', function(d, i) {
        d3.select(this)
          .transition()
          .duration(500)
          .style('fill', 'steelblue');
      });

    node
      .append('text')
      .filter(function(d) {
        return d.data.name.length > 0;
      })
      .attr('dx', function(d) {
        return d.children ? -18 : 18;
      })
      .attr('class', 'textLabel')
      .attr('id', function(d, i) {
        return 'txt' + i;
      })
      .attr('dy', 3)
      .attr('text-anchor', function(d) {
        return d.children ? 'end' : 'start';
      })
      .text(function(d) {
        return d.data.name;
      });
  }

  elbow(d, i) {
    // console.log('elbow d.parent.y ', d.parent.y, ' d.parent.x ', d.parent.x, ' d.y ', d.y, ' d.x ', d.x);
    return 'M' + (d.parent.y + 10) + ',' + d.parent.x + 'V' + d.x + 'H' + (d.y - 0);
  }
}
