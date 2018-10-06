import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Picture } from '../models/picture';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const BASE_PICTURE_URL = '../assets/data-collections/allPictures.json';
const BASE_FAMILY_URL = '../../../assets/data-collections/familyTreeCollection.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

export interface Picture {
  _id: number | string;
  title: string;
  image: string;
  keyword: string;
  description: string;
  tags: [string];
}

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private picturesUrl = 'http://localhost:8080/api/pictures';

  pictures: Observable<Picture[]>;
  private _pictures: BehaviorSubject<Picture[]>;
  private baseUrl: string;
  private pictureStore: {
    pictures: Picture[];
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api';
    this.pictureStore = { pictures: [] };
    this._pictures = <BehaviorSubject<Picture[]>>new BehaviorSubject([]);
    this.pictures = this._pictures.asObservable();
  }

  loadAll() {
    this.http.get<Picture[]>(`${this.baseUrl}/pictures`).subscribe(
      data => {
        console.log('data ', data);
        this.pictureStore.pictures = data;
        this._pictures.next(Object.assign({}, this.pictureStore).pictures);
      },
      error => console.log('Could not load pictures.')
    );
  }

  create(picture: Picture) {
    console.log('picture ', picture);
    this.http.post(`${this.baseUrl}/pictures`, picture).subscribe(
      data => {
        console.log('Could load pictures ', data);
        //  this.pictureStore.pictures.push(data);
        this._pictures.next(Object.assign({}, this.pictureStore).pictures);
      },
      error => console.log('Could not create pictures.')
    );
  }

  // load(title: number | string) {
  //   this.http.get(`${this.baseUrl}/pictures/${title}`).subscribe(
  //     data => {
  //       console.log('data ', data);
  //       let notFound = true;
  //
  //       this.pictureStore.pictures.forEach((item, index) => {
  //         if (item._id === data._id) {
  //           this.pictureStore.pictures[index] = data;
  //           notFound = false;
  //         }
  //       });
  //
  //       if (notFound) {
  //         this.pictureStore.pictures.push(data);
  //       }
  //
  //       this._pictures.next(Object.assign({}, this.pictureStore).pictures);
  //     },
  //     error => console.log('Could not load todo.')
  //   );
  // }

  getPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.picturesUrl).pipe(
      debounceTime(2400),
      catchError(this.handleError('getPictures', []))
    );
  }

  getPicture(id: string): Observable<Picture> {
    const url = `${this.picturesUrl}/${id}`;
    return this.http.get<Picture>(url).pipe(
      tap(_ => console.log(`fetched picture id=${id}`)),
      catchError(this.handleError<Picture>(`getHero id=${id}`))
    );
  }

  updatePicture(picture: Picture): Observable<any> {
    return this.http.put(this.picturesUrl, picture, httpOptions);
  }

  addPicture(picture: Picture): Observable<any> {
    return this.http.post(this.picturesUrl, picture, httpOptions);
  }

  remove(todoId: string) {
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

  // deletePicture(picture: Picture | string): Observable<Picture> {
  //   const id = typeof picture === 'string' ? picture : picture._id;
  //   console.log('typeof ', id);
  //   const url = `${this.picturesUrl}/${id}`;
  //
  //   return this.http.delete<Picture>(url, httpOptions);
  // }

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
