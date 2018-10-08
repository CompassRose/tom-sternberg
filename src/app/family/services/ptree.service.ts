import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';

const BASE_URL = '../../assets/data-collections/d3ParentTree.json';
const BASE_DATA_URL = '../../assets/data-collections/d3Functions.json';

@Injectable()
export class ParentalService {
  public mapDrawValue;

  constructor(private _http: HttpClient) {
    this.mapDrawValue = 'Prospect State';
  }

  getParentalData(): Observable<any> {
    return this._http
      .get(BASE_URL)
      .map(response => response)
      .catch(this.handleError);
  }

  getDescendantData(): Observable<any> {
    return this._http
      .get(BASE_DATA_URL)
      .map(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}
