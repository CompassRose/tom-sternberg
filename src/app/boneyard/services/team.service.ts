import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
<<<<<<< HEAD
    Injectable,
} from '@angular/core';
=======
    Injectable
} from '@angular/core';
// import { Headers } from '@angular/common/http';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
>>>>>>> develop

@Injectable()
export class TeamService {
    teamId: number;
    teamName: string;
<<<<<<< HEAD
    ownerNames: any;
    playerList = [];

    constructor(teamId: number, franchiseName: string, franchiseOwner: string) {
        // console.log('TeamService ', franchiseName);
        this.teamId = teamId;
        this.teamName = franchiseName;
        this.ownerNames = franchiseOwner;
=======
    playerList = [];

    public BASE_PICTURE_URL = '../assets/allNewData.json';

    constructor(
        private http: HttpClient // teamId: number, // franchiseName: string, // franchiseOwner: string
    ) {
        // console.log('TeamService ', franchiseName);
        // this.teamId = teamId;
        // this.teamName = franchiseName;
        // this.ownerNames = franchiseOwner;
    }

    getTeamContents(): Observable<any> {
        return this.http
            .get(this.BASE_PICTURE_URL)
            .map(response => response)
            .catch(this.handleError);
    }

    createPizza(payload: any): Observable<any> {
        const newData = JSON.stringify(payload);
        console.log('createPizza ', payload);

        return this.http
            .post<any>(this.BASE_PICTURE_URL, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    private handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
>>>>>>> develop
    }
}
