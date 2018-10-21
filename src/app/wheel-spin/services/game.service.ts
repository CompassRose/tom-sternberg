import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const TABLE_VALUES_URL = '../../assets/data-collections/table-values.json';

@Injectable()
export class TableService {
  static handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  constructor(private _http: HttpClient) {}

  getTableConfigs(): Observable<any> {
    return this._http
      .get(TABLE_VALUES_URL)
      .map(response => response)
      .catch(TableService.handleError);
  }
}
