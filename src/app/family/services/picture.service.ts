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
  thisPicture: Observable<Picture>;
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

  create(picture: Picture) {
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

  testFunctions() {
    this.generateArrays();

    const priceArray = Array.from({ length: 40 }, () => Math.floor(Math.random() * 30));
    const tempObject = this.GetBuyandSellPoints(priceArray);

    console.log('Buy at: $', priceArray[tempObject.buy]);
    console.log('Sell at: $', priceArray[tempObject.sell]);

    //  console.log('rev ', this.reverseString('hello Joe whatcha know'));
    //  console.log('rev ', this.reverseString2('hello Tom Joe Blow'));
    // this.callAmPrime();
  }

  GetBuyandSellPoints(arry: Array<number>) {
    const lower = arry.indexOf(Math.min(...arry));
    const higher = arry.indexOf(Math.max(...arry));

    return {
      buy: lower,
      sell: higher
    };
  }

  reverseString2(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  reverseString(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }

  isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  callAmPrime() {
    const primeArray = [];
    for (let i = 0; i < 100; i++) {
      if (this.isPrime(i)) {
        primeArray.push(i);
      }
    }
    console.log('primeArray ', primeArray);
  }

  generateArrays() {
    const returnedData = this.processArrays();
    console.log('There are', returnedData.length, 'Matching Items \n');
    returnedData.forEach(d => {
      // console.log('Matching Value ', d.value, '\n', '   1st index: ', d.index1, '\n', '   2nd index: ', d.index2, '\n\n');
    });
  }

  processArrays() {
    const arr1 = [1, 4, 5, 'joe', 6, 7, 5, 6, 5, 56, 'news', 11, 78, 9789, 8679, 7, 10];
    const arr2 = [1, 5, 6, 8, 7, 8, 5, 6, 7, 8, 10, 11, 'news', 78, 'frankie'];

    function sortNumber(a, b) {
      return a - b;
    }

    console.log('sorted ', arr1.sort(sortNumber));
    console.log('sorted 2 ', arr2.sort(sortNumber));

    // Remove Dups
    arr1.filter((el, index, a) => {
      return index === a.indexOf(el);
    });
    arr2.filter((el, index, a) => {
      return index === a.indexOf(el);
    });

    const finalArray = [];
    // run the intersection
    arr1.forEach((e1, i) =>
      arr2.forEach((e2, j) => {
        if (e1 === e2) {
          finalArray.push({ value: e1, index1: i, index2: j });
        }
      })
    );

    const merged = arr1.concat(arr2);
    console.log('merged ', merged);

    return finalArray;
  }
}
