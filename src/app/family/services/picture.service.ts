import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE_URL = 'http://localhost:3000/pictures/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


@Injectable()
export class PictureService {

  constructor(private http: HttpClient) {
  }

  getPictureContents(): Observable<any> {
    return this.http.get(BASE_URL)
      .map(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
