import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
    Injectable
} from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TeamService {
    teamId: number;
    teamName: string;
    playerList = [];

    public BASE_PICTURE_URL = '../assets/data-collections/allNewData.json';

    constructor(private http: HttpClient) {}

    getTeamContents(): Observable<any> {
        return this.http
            .get(this.BASE_PICTURE_URL)
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
}
