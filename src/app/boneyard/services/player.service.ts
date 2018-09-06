import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PlayerService {
    API_URL = '../../assets/2018-NFL-All.csv';

    constructor(private http: HttpClient) {}

    // csv response
    getCsvData(): Observable<any> {
        return this.http
            .get(this.API_URL, { responseType: 'text' })
            .map(res => this.csvJSON(res))
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

    // var csv is the CSV file with headers
    csvJSON(csv) {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentline = lines[i].split(',');

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }

        // return result; //JavaScript object
        return result;
        // return JSON.stringify(result, null, 2); // JSON
    }
}
