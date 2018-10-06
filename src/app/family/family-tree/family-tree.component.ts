import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as d3 from 'd3';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss'],
  providers: [PictureService]
})
export class FamilyTreeComponent implements OnInit {
  constructor(private _pictureService: PictureService) {}

  ngOnInit() {
    const parent = this;
    const d = document,
      e = d.documentElement,
      w = 1600,
      h = 400;

    const width = w,
      height = h * 2;

    const tree = d3.cluster().size([height, width - 300]);

    var svg = d3
      .select('#treechart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    var svg = d3
      .select('#treechart')
      .select('svg')
      .append('g')
      .attr('transform', 'translate(80,0)');

    d3.json('../../assets/data-collections/d3Functions.json', function(json) {
      const root = d3.hierarchy(json);
      tree(root);

      var link = svg
        .selectAll('path.link')
        .data(root.descendants().slice(1))
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', parent.elbow);

      var node = svg
        .selectAll('g.node')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function(d) {
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

      var objs = document.querySelectorAll('text.textLabel');
      var widths = [];

      for (let o = 0; o < objs.length; o++) {
        const obj = document.getElementById(objs[o].id);
        const bb = obj.getBoundingClientRect();
        widths.push(bb.width);
      }

      node
        .append('rect')
        .attr('stroke-width', 1)
        .attr('stroke', '#faf8ff')
        .attr('fill', '#000000')
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
          return widths[i] + 6;
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
    });
  }

  elbow(d, i) {
    // console.log('elbow ', d);
    return 'M' + d.parent.y + ',' + d.parent.x + 'V' + d.x + 'H' + (d.y - 0);
  }
}
