import {Injectable} from '@angular/core';
 import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import * as d3 from 'd3';
import * as $ from 'jquery';
import {timeFormat} from 'd3-time-format';
import {MAPPING_DATA} from './mappings';




@Injectable()
export class ChartConfigService {

  private mappingData = MAPPING_DATA;
  private mapNest;
  public mapDrawValue: string;
  public detailData;
  private rowData: any;
  public mouse: any = {x: 0, y: 0};
  private margin;
  private columnData;


  constructor(private http: HttpClient) {
    this.margin = {top: 10, right: 30, bottom: 10, left: 20};
    this.initMouse(this);
    this.initTip(this);
    this.mapDrawValue = 'Prospect State';
  }


// Old hard coded csv response
  getCsvData(): Observable<any> {
    return this.http.get('../../../assets/data-collections/Quotes.csv', { responseType: 'text' })
      .map((res) => this.mapInitialData(res))
      .catch(this.handleError);
  }


// // Called from details tab to populate filtered details
//   getChartResults(filter: QueryObject): Observable<any> {
//     return this.catalogService.getResults(filter)
//   }


  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  // Initial chart states from raw data
  private mapInitialData(res) {
    const dataRows: any = d3.csvParse(res);
    this.columnData = dataRows.columns;
    this.rowData = dataRows.filter(function (el) {
      return el !== 'columns';
    });
    return this.rowData;
  }


  public mapDataRows(dataRows) {
    // console.log(
    //   "|----------------------------\n",
    //   "| Filter, ", filter, "\n",
    //   "| Type: ", type, "\n",
    //   "| Data: ", dataRows.length,
    //   "\n|----------------------------\n\n\n"
    // );
    const mapper: any = this.mappingData;
    let data: any = d3.entries(dataRows);
    data = data.map((d, i) => {
      const obj: any = {};
      mapper.quotes.forEach((item, index) => {
        if (!item.count) {
          obj[item.value] = this.formatData(d, item, index);
        }
      });
      return obj;
    });
    return data;
  }


  // Rolls up chart data into usable format
  nestChartData(key: string, data: object[]): any[] {
    const nest = d3.nest()
      .key(function (d) {
        return d[key];
      })
      .sortKeys(d3.ascending)
      .rollup((leaves) => {
        const obj = {},
          rollup = this.rollitup();
        rollup.forEach(function (v, i) {
          if (v.count) {
            obj[v.value] = leaves.length;
          } else {
            obj[v.value] = d3.sum(leaves, function (d) {
              return d[v.value];
            });
          }
        });
        return obj as any;
      })
      .entries(data)
      .map(function (group: any, i) {
        if (!group.key) {
          // console.log("Chart group Gone Bad ", group.value);
        }
        return {
          key: group.key,
          values: group.value
        };
      });
    console.log('Chart nest ', nest);
    return nest;
  }


  private nestMapData = function (key, data): any {
    this.mapNest = d3.nest()
      .key(function (d) {
        return d[key];
      })
      .sortKeys(d3.ascending)
      .rollup((leaves) => {
        const obj = {},
          rollup = this.rollitup();
        rollup.forEach(function (v, i) {
          if (v.count) {
            obj[v.value] = leaves.length;
          } else {
            obj[v.value] = d3.sum(leaves, function (d) {
              return d[v.value];
            });
          }
        });
        return obj as any;
      })
      .entries(data);
    return this.mapNest;
  };





  // get rollup fields as defined in mappings.js
  private rollitup() {
    const rollup = [];
    this.mappingData.quotes.forEach(function (v: any) {
      if (v.rollup) {
        rollup.push(v);
      }
    });
    return rollup;
  }




// formats data according to rules specified in mappings.js
  private formatData(d, v, i) {
    if (v.type === 'money') {
      return parseFloat(d.value[v.value]);
    } else if (v.type === 'string') {
      return this.titleCase(d.value[v.value]);
    } else if (v.type === 'leadingZero') {
      return this.addLeadingZero(d.value[v.value]);
    } else if (v.type === 'date') {
      if (v.format === 'year') {
        // console.log("Format year ");
        return this.formatDate(d.value[v.key], 'year');
      } else if (v.format === 'yearMonth') {
        return this.formatDate(d.value[v.key], 'month');
      } else {
        return this.formatDate(d.value[v.value], 'day');
      }
    } else {
      return d.value[v.value];
    }
  }



  // formats date (m/d/yyyy -> yyyy-mm-dd)
  private formatDate(d, timeframe) {
    if (d) {
      const aDate = new Date(d);
      let parseDate;

      if (timeframe === 'year') {
        parseDate = d3.timeFormat('%Y');
      } else if (timeframe === 'month') {
        parseDate = d3.timeFormat('%m-%Y');
      } else {
        parseDate = d3.timeFormat('%m-%d-%Y');
      }
      const date = parseDate(aDate);
      return date;
    } else {
      return '';
    }
  }


// adds a leading 0 to a single digit number
  private addLeadingZero(num: string) {
    return (parseInt(num) < 10) ? '0' + num : num;
  }


//
// converts a string to Lower and then TitleCase.
// Used for normalizing city names.

  private titleCase(s: string) {
    if (s) {
      return s.toLowerCase().replace(/^(.)|\s(.)/g,
        ($1) => {
          return $1.toUpperCase();
        });
    }
    return '';
  }



  sizeContainers = function (target) {
   // console.log('chartWindow ', target);
    const pieChartWindow = document.getElementById(target);
    const chartWindow = pieChartWindow.getBoundingClientRect();
   // console.log('chartWindow ', chartWindow.width);
    return {width: Math.abs(chartWindow.width), height: 260};
  };


  // get the right fields pertaining to this widget
  getFields(id: string) {
    let fields: any = this.mappingData;
    fields = fields.quotes.filter((d: any) => {
      return (d[id]);
    });
    fields.sort(function (a, b) {
      if (a.value < b.value) {
        return -1;
      }
      if (a.value > b.value) {
        return 1;
      }
      return 0;
    });
    return fields;
  }


  // populate the widget's dropdown with the fields
  initDropdown(val: { value: any }[]) {
    return val.map(v => v.value);
  }


  // update row count badge text
  setDetailCollection(rec) {
    this.detailData = rec;
  }


  // Map State data for map screen
  mapStateData(dataRows) {
    const mapper: any = this.mappingData;
    let data = d3.entries(dataRows);
    data = data.map((d) => {
      const obj: any = {};
      mapper.quotes.forEach((item, index) => {
        if (!item.count) {
          obj[item.value] = this.formatData(d, item, index);
        }
      });
      return obj;
    });
    return this.nestMapData(this.mapDrawValue, data);
  }


  // update row count badge text
  setRowCount(details: any[]) {
    // console.log('setRowCount ', details);
    this.detailData = details;
    const len = details.length;
    const badge = $('#rowCount');
    badge.text(len);
    badge.css('background', this.getRowCount().color);
  }


  // get row count
  getRowCount() {
    const count: any = $('#rowCount').text();
    let color = 'green';
    let message = '';

    if (count <= 1000) {
      color = 'green';
      message = '';
    } else if (count > 5000) {
      color = 'red';
      message = 'This could take a minute.';
    } else {
      color = '#f0ad4e';
      message = 'Should just be a few seconds.';
    }

    return {count: count, color: color, message: message};
  }




  private initMouse(parent) {
    document.addEventListener('mousemove', function (e: MouseEvent) {
      parent.mouse.x = (e.clientX || e.pageX) + (document.body.scrollLeft || document.documentElement.scrollLeft);
      parent.mouse.y = (e.clientY || e.pageY) + (document.body.scrollTop || document.documentElement.scrollTop);
    //  console.log('initMouse x ', parent.mouse.x, ' y ', parent.mouse.y);
    }, false);
  }



  // hide the tip
  private hideTip() {
    const tip = $('#chartTip');
    tip.hide();
  }


  // add html for holding rollover tip data
  private initTip(parent) {
    let chartTip = '<div class="chart-tip" id="chartTip"><table>';
    chartTip += '<thead><tr><th class="key" colspan="2"></th></tr></thead>';
    chartTip += '<tbody></tbody>';
    chartTip += '</table></div>';
    $('body').prepend(chartTip);
  }


  // update tip position and data
  public showTip(left, top, stateValues, values) {
    const tip = $('#chartTip'),
      keyTD = tip.find('.key'),
      valueTD = tip.find('.value'),
      moneyFormat = function (n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      },
      isTotal = function (key) {
        return key.indexOf('Total') !== -1;
      };
    keyTD.text(stateValues);
    valueTD.text(values.total);

    tip.find('tbody').empty();
    for (let i = 0; i < d3.keys(values).length; i++) {
      const key: any = d3.keys(values)[i],
        value = (isTotal(key)) ? moneyFormat(values[key], '$') : values[key];
      // console.log("value ", value);
      tip.find('tbody').append('<tr><td>' + key + '</td><td class="text-right">' + value + '</td></tr>');
    }

    const tipW = tip.width() + 30,
      tipH = tip.outerHeight(),
      winW = $(window).width(),
      winH = $(window).height(),
      wDiff = Math.ceil(winW - tipW),
      hDiff = Math.ceil(winH - tipH);


    if (Math.ceil(top - tipH) > 0) {
      top = top - tipH;
    }
    if (Math.ceil(left) >= wDiff) {
      left = left - tipW + 10;
    } else {
      left = left + 30;
    }
    tip.css({
      top: top + 'px',
      left: left + 'px'
    });
    tip.show();
  }
}





