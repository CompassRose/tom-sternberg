import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-custom-tooltip',
    templateUrl: './custom-tooltip.component.html',
    styleUrls: ['./custom-tooltip.component.scss'],
})
export class CustomTooltipComponent implements OnInit, OnChanges {
    @Input()
    tiptitle;
    @Input()
    tipvalues;
    @Input()
    tipPositionX;
    @Input()
    tipPositionY;

    public toolTitle: string;
    public toolValues;
    public tipPosLeft;
    public tipPosTop;
    public valueType = true;
    constructor() {}

    ngOnInit() {
        this.tipPosLeft = this.tipPositionX;
        this.tipPosTop = this.tipPositionY;
        this.toolTitle = this.tiptitle;
        if (typeof this.tipvalues === 'object') {
            this.valueType = true;
            this.setValueFormat(this.tipvalues);
        } else {
            this.valueType = false;
            this.toolValues = this.tipvalues;
        }
    }

    ngOnChanges(): void {
        this.tipPosLeft = this.tipPositionX;
        this.tipPosTop = this.tipPositionY;
        this.toolTitle = this.tiptitle;
        if (typeof this.tipvalues === 'object') {
            this.valueType = true;
            this.setValueFormat(this.tipvalues);
        } else {
            this.valueType = false;
            this.toolValues = this.tipvalues;
        }
    }

    setValueFormat(params) {
        const moneyFormat = function(n, currency) {
            return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        };
        const isTotal = function(key) {
            return key.indexOf('Total') !== -1;
        };
        this.toolValues = [];
        for (let i = 0; i < d3.keys(params).length; i++) {
            const key: any = d3.keys(params)[i],
                value = isTotal(key) ? moneyFormat(params[key], '$') : params[key];
            this.toolValues.push({ name: key, value: value });
        }
    }
}
