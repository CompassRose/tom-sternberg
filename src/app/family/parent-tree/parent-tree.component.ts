import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { ParentalService } from '../services/ptree.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as d3 from 'd3';

@Component({
  selector: 'app-parent-tree',
  templateUrl: './parent-tree.component.html',
  styleUrls: ['./parent-tree.component.scss'],
  providers: [PictureService, ParentalService]
})
export class ParentTreeComponent implements OnInit {
  myDataFile: any;
  tree;
  svg;
  margin;
  width;
  height;
  fullWidth = 960;
  fullHeight = 500;

  constructor(private parentalService: ParentalService) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.margin = { top: 0, right: 320, bottom: 0, left: 0 };
    const fullWidth = 960;
    const fullHeight = 500;
    this.width = fullWidth - this.margin.left - this.margin.right;
    this.height = fullHeight - this.margin.top - this.margin.bottom;

    this.parentalService.getParentalData().subscribe(res => {
      this.myDataFile = res;
      console.log('this.myDataFile ', this.myDataFile);
      this.draw();
    });
  }

  draw() {
    const tree = d3
      .tree()
      .separation((a, b) => (a.parent === b.parent ? 1 : 0.5))
      .size([this.height, this.width]);

    const svg = d3
      .select('#treechart')
      .append('svg')
      .attr('width', this.fullWidth)
      .attr('height', this.fullHeight);

    const g = svg.append('g').attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    g.append('text')
      .text('d3.tree - A Family Tree')
      .attr('class', 'title')
      .attr('x', 50)
      .attr('y', 50);

    const elbow = (d, i) => {
      return `M${d.source.y},${d.source.x}H${d.target.y},V${d.target.x}${d.target.children ? '' : 'h' + this.margin.right}`;
    };

    const nodes = d3.hierarchy(this.myDataFile, d => d.parents);

    const root = d3.hierarchy(this.myDataFile, e => e.descendants);

    console.log('descendants ', root);

    // maps hierarchy to tree layout
    const treeNodes = tree(nodes);

    console.log('dtreeNodes ', treeNodes.links());

    // adds links between nodes
    const link = g
      .selectAll('.link')
      .data(treeNodes.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', this.elbow);

    const node = g
      .selectAll('.node')
      .data(treeNodes.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    node
      .append('text')
      .attr('class', 'name')
      .attr('x', 8)
      .attr('y', -6)
      .text(d => `${d.data.name}`);

    node
      .append('text')
      .attr('x', 8)
      .attr('y', 8)
      .attr('dy', '.71em')
      .attr('class', 'about lifespan')
      .text(d => `${d.data.born} - ${d.data.died}`);

    node
      .append('text')
      .attr('class', 'about location')
      .attr('x', 8)
      .attr('y', 8)
      .attr('dy', '1.86em')
      .text(d => `${d.data.location}`);
    // });
  }

  elbow = d => {
    return `M${d.source.y},${d.source.x}H${d.target.y},V${d.target.x}${d.target.children ? '' : 'h' + this.margin.right}`;
  };
}
