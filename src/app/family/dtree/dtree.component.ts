import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as dTree from 'd3-dtree';
import { ParentalService } from '../services/ptree.service';

@Component({
  selector: 'app-dtree',
  templateUrl: './dtree.component.html',
  styleUrls: ['./dtree.component.scss']
})
export class DtreeComponent implements OnInit {
  public treeData;

  constructor(private parentalService: ParentalService) {}

  ngOnInit() {
    this.parentalService.getGlobalTreeData().subscribe(res => {
      this.initTree(res);
    });
  }

  initTree(res) {
    this.treeData = res;

    this.parentalService.getTreeSubjectData(this.treeData);

    dTree.init(this.treeData, {
      target: '#graph',
      debug: true,
      height: 800,
      width: 1600,
      callbacks: {
        nodeClick: function(name, extra) {
          console.log(name);
        },
        textRenderer: function(name, extra, textClass) {
          // console.log('name ', name, ' class ', extra, 'textClass ', textClass);
          if (extra) name = name + ' (' + extra.born + ')';
          return "<p align='center' class='" + textClass + "'>" + name + '</p>';
        }
      }
    });
  }
}
