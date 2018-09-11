import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const BASE_URL = '../assets/data-collections/experience.json';

@Injectable()
export class GameHistoryService {
    constructor(private http: HttpClient) {}

    getHistoryContents(): Observable<any> {
        return this.http
            .get(BASE_URL)
            .map(response => response[1].projects)
            .catch(this.handleError);
    }

    handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
