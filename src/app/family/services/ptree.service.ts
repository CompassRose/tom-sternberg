import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { timeFormat } from 'd3-time-format';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const BASE_URL = '../../assets/data-collections/d3ParentTree.json';
const BASE_DATA_URL = '../../assets/data-collections/d3Functions.json';
const D3_DATA_URL = '../../assets/data-collections/d3Tree.json';

@Injectable()
export class ParentalService {
  public detailData;
  public globalTreeSubject = new BehaviorSubject<any>(this.detailData);

  static handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  constructor(private _http: HttpClient) {}

  // Called from behavior subject

  getTreeSubjectData(newList) {
    this.globalTreeSubject.next(newList);
  }

  getGlobalTreeData(): Observable<any> {
    return this._http
      .get(D3_DATA_URL)
      .map(response => this.handleTreeData(response))
      .catch(ParentalService.handleError);
  }

  handleTreeData(res) {
    this.detailData = res;
    return this.detailData;
  }

  getParentalData(): Observable<any> {
    return this._http
      .get(BASE_URL)
      .map(response => response)
      .catch(ParentalService.handleError);
  }

  getDescendantData(): Observable<any> {
    return this._http
      .get(BASE_DATA_URL)
      .map(response => response)
      .catch(ParentalService.handleError);
  }
}
