import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';
import { timeParse } from 'd3-time-format';

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
    constructor(private _http: HttpClient) {}

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
        return Observable.throw(errMsg);
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
