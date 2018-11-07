import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Picture } from '../models/picture';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';

const BASE_PICTURE_URL = '../assets/data-collections/allPictures.json';
const BASE_FAMILY_URL = '../../../assets/data-collections/familyTreeCollection.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private picturesUrl = 'http://localhost:4000/api/pictures';
  pictures: Observable<Picture[]>;
  private _pictures: BehaviorSubject<Picture[]>;
  private baseUrl: string;
  private pictureStore: {
    pictures: Picture[];
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:4000/api';
    this.pictureStore = { pictures: [] };
    this._pictures = <BehaviorSubject<Picture[]>>new BehaviorSubject([]);
    this.pictures = this._pictures.asObservable();
  }

  loadAll() {
    this.http.get<Picture[]>(`${this.baseUrl}/pictures`).subscribe(
      data => {
        this.pictureStore.pictures = data;
        this._pictures.next(Object.assign({}, this.pictureStore).pictures);
      },
      error => console.log('Could not load pictures.')
    );
  }

  createPicture(picture: Picture) {
    this.http.post(`${this.baseUrl}/pictures`, picture).subscribe(
      data => {
        this.pictureStore.pictures.push(data as Picture);
        this._pictures.next(Object.assign({}, this.pictureStore).pictures);
      },
      error => console.log('Could not create pictures.')
    );
  }

  getPicture(todoId: string): Observable<Picture> {
    return this.http.get<Picture>(`${this.baseUrl}/pictures/${todoId}`);
  }

  updatePicture(picture: Picture): Observable<any> {
    return this.http.put(this.picturesUrl, picture, httpOptions);
  }

  removePicture(todoId: string) {
    this.http.delete(`${this.baseUrl}/pictures/${todoId}`).subscribe(
      response => {
        this.pictureStore.pictures.forEach((t, i) => {
          if (t._id === todoId) {
            this.pictureStore.pictures.splice(i, 1);
          }
        });

        this._pictures.next(Object.assign({}, this.pictureStore).pictures);
      },
      error => console.log('Could not delete todo.')
    );
  }

  getFamilyContents(): Observable<any> {
    return this.http
      .get(BASE_FAMILY_URL)
      .map(res => res)
      .pipe(catchError(this.handleError('getFamilyContents', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
