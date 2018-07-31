import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../models/picture';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// const BASE_URL = 'http://localhost:3000/items/';

@Injectable()
export class PictureService {
// API_URL = environment.apiUrl;
  API_URL = './assets/familyPics.json';

  constructor(private http: HttpClient) {}

  getPictureContents(): Observable<any> {
    return this.http.get(this.API_URL)
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
