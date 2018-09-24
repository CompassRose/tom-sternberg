import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpRequest,
    HttpClientModule,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public result;
    public pictures;

    constructor(private http: HttpClient) {}

    getUsers() {
        console.log('getUsers');
        return this.http.get('/api/users').map(result => (this.result = result));
    }

    getPictures() {
        console.log('getPictures');
        return this.http.get('/api/pictures').map(result => (this.pictures = result));
    }

    postPictures() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        // const newPictureData = req.body;
        //  return this.http.post('/api/pictures');
        console.log('New Invite Name ');
        return this.http.post('/api/pictures', { name: '2' }, { headers: headers });
    }

    processResponse(values) {
        console.log('processResponse ', this.result);
    }
}
