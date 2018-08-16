import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-save-items',
  templateUrl: './filter-save-items.component.html',
  styleUrls: ['./filter-save-items.component.scss']
})

export class FilterSaveItemsComponent implements OnInit {

  @Input() filters: any[];
  @Input() charts: any[];

  allCharts: any []
  constructor() { }

  ngOnInit() {
    this.allCharts = this.charts;
  }
  //
  // // From saved list delete filter
  // removeThisFilter(item, i) {
  //   this.filters.splice(i, 1);
  //   this.allCharts.forEach((d, idx) => {
  //     if (item.key === d.title) {
  //       this.setChartBtnsState(d, false);
  //     }
  //     let filteredList = this.returnFiltered("remove");
  //     if (this.filters.length > 0) {
  //       this.filters.forEach((el, index) => {
  //         console.log("removeThisFilter d.title ", d.title, " item.key ", item.key);
  //         if (d.title === item.key) {
  //           d.key = "";
  //           d.chartType = d.chartTypeInit;
  //         } else if (d.title === el.key) {
  //           this.setChartData(filteredList);
  //         }
  //       });
  //     } else {
  //       this.saveActive = false;
  //       if (d.title === item.key) {
  //         d.key = "";
  //         this.setChartData(filteredList);
  //       }
  //       d.chartType = d.chartTypeInit;
  //     }
  //   });
  // }


}
