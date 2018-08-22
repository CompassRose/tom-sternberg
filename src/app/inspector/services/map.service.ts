import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormatService } from './format.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';

import { MAPPING_DATA } from './mappings';
const BASE_URL = '../assets/us.json';

export interface ChartData {
    'Prospect Zip': string;
    'Quote Date Created': string;
    'Sale Written Week Of Year': number;
    'Quote Comment': string;
    'Sale Written Day Of Month': number;
    'Sale Written Date Created': string;
    'Prospect State': string;
    'Sales Person': string;
    'Billing Mode': string;
    'Total Premium Sold': number;
    'Number of Quotes Sold': number;
    'Total Premium Quoted': number;
    'Line Of Business': string;
    Product: string;
    'Prospect City': string;
    'Most Recent Contact Source Type Prior To Quote': string;
    'Made Sale': string;
    'Most Recent Contact Source Prior To Quote': string;
}

@Injectable()
export class MapService {
    public mapDrawValue;

    constructor(private _http: HttpClient, private formatService: FormatService) {
        this.mapDrawValue = 'Prospect State';
    }
    private mappingData = MAPPING_DATA;

    getMapData(): Observable<any> {
        return this._http
            .get(BASE_URL)
            .map(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    }

    // Map State data for map screen
    mapStateData(dataRows) {
        const mapper: any = this.mappingData;
        let data = d3.entries(dataRows);
        data = data.map(d => {
            const obj: any = {};
            mapper.quotes.forEach((item, index) => {
                if (!item.count) {
                    obj[item.value] = this.formatService.formatData(d, item);
                }
            });
            return obj;
        });
        console.log('map state ', this.nestMapData(this.mapDrawValue, data));
        return this.nestMapData(this.mapDrawValue, data);
    }

    private nestMapData = function(key, data): any {
        const tempMap = d3
            .nest()
            .key(function(d) {
                return d[key];
            })
            .sortKeys(d3.ascending)
            .rollup(leaves => {
                const obj = {},
                    rollup = this.rollitup();
                rollup.forEach(function(v, i) {
                    if (v.count) {
                        obj[v.value] = leaves.length;
                    } else {
                        obj[v.value] = d3.sum(leaves, function(d) {
                            return d[v.value];
                        });
                    }
                });
                return obj as any;
            })
            .entries(data);
        return tempMap;
    };

    // get rollup fields as defined in mappings.js
    private rollitup() {
        const rollup = [];
        this.mappingData.quotes.forEach(function(v: any) {
            if (v.rollup) {
                rollup.push(v);
            }
        });
        return rollup;
    }

    // get the right fields pertaining to this widget
    getFields(id: string) {
        let fields: any = this.mappingData;
        fields = fields.quotes.filter((d: any) => {
            return d[id];
        });
        fields.sort(function(a, b) {
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

    // getContinentData(): Observable<ChartData> {
    //     return this._http
    //         .get('./assets/north-america.json')
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    getCities(): Observable<any> {
        return this._http.get('./assets/majorCities.csv');
        // .map((res) => this.mapMajorCityData(res))
        // .catch(this.handleError);
    }

    // getWorldMapData(): Observable<ChartData> {
    //     return this._http
    //         .get('./assets/world-countries.json')
    //         .map(response => response.json())
    //         .catch(this.handleError);
    // }

    mapMajorCityData(res) {
        console.log('mapMajorCityData ', res);
        // res.forEach((d,i)=>{
        //
        //
        // })
    }
}
