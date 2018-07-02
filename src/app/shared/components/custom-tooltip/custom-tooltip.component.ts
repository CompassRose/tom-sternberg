import {Component, Input, OnInit, OnChanges} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})

export class CustomTooltipComponent implements OnInit, OnChanges {

  @Input() tiptitle;
  @Input() tipvalues;
  @Input() tipPositionX;
  @Input() tipPositionY;

  public toolTitle: string;
  public toolValues: any[] = [];
  public tipPosLeft;
  public tipPosTop;

  constructor() {
  }


  ngOnInit() {
    this.tipPosLeft = this.tipPositionX;
    this.tipPosTop = this.tipPositionY;
    this.toolTitle = this.tiptitle;
    this.setValueFormat(this.tipvalues);
  }

  ngOnChanges(): void {
    this.tipPosLeft = this.tipPositionX;
    this.tipPosTop = this.tipPositionY;
    this.toolTitle = this.tiptitle;
    this.setValueFormat(this.tipvalues);
  }



  setValueFormat(params) {
    const moneyFormat = function (n, currency) {
      return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    };
    const isTotal = function (key) {
      return key.indexOf('Total') !== -1;
    };
    this.toolValues = [];
    for (let i = 0; i < d3.keys(params).length; i++) {
      const key: any = d3.keys(params)[i],
        value = (isTotal(key)) ? moneyFormat(params[key], '$') : params[key];
      this.toolValues.push({name: key, value: value});
    }
  }



  public initMouse(parent) {
    document.addEventListener('mousemove', function (e: MouseEvent) {
      parent.mouse.x = (e.clientX || e.pageX) + (document.body.scrollLeft || document.documentElement.scrollLeft);
      parent.mouse.y = (e.clientY || e.pageY) + (document.body.scrollTop || document.documentElement.scrollTop);
      //  console.log('initMouse x ', parent.mouse.x, ' y ', parent.mouse.y);
    }, false);
  }
}
