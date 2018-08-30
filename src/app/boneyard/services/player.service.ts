import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class PlayerService {
    API_URL = '../../assets/2018-NFL-All.csv';
    POST_API_URL = 'http://localhost:4200/assets/newTeamData.json';

    constructor(private http: HttpClient) {}

    // csv response
    getCsvData(): Observable<any> {
        return this.http
            .get(this.API_URL, { responseType: 'text' })
            .map(res => this.csvJSON(res))
            .catch(this.handleError);
    }

    // saveAllMyData(players: any): Observable<any> {
    //     return this.http.post<any>(this.POST_API_URL, players, this.httpOptions);
    //     // .pipe(catchError(this.handleError('addHero', players)));
    // }

    saveTeamData(payload: any): Observable<any> {
        console.log('saveTeamData ', payload);
        return this.http
            .post<any>(`../../assets/newTeamService.js`, payload)
            .catch(this.handleError);
    }

    httpPutExample() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        this.http
            .put(
                'this.POST_API_URL',
                {
                    courseListIcon: '.../main-page-logo-small-hat.png',
                    description: 'Angular Tutorial For Beginners TEST',
                    iconUrl: '.../angular2-for-beginners.jpg',
                    longDescription: '...',
                    url: 'new-value-for-url'
                },
                { headers }
            )
            .subscribe(
                val => {
                    console.log('PUT call successful value returned in body', val);
                },
                response => {
                    console.log('PUT call in error', response);
                },
                () => {
                    console.log('The PUT observable is now completed.');
                }
            );
    }

    httpPostExample() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        this.http
            .post('http://localhost:4200/assets/allNewData.json', {
                courseListIcon: '...',
                description: 'TEST',
                iconUrl: '..',
                longDescription: '...',
                url: 'new-url'
            })
            .subscribe(
                val => {
                    console.log('POST call successful value returned in body', val);
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    console.log('The POST observable is now completed.');
                }
            );
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
