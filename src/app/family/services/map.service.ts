import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { timeFormat } from 'd3-time-format';
import { timeParse } from 'd3-time-format';

@Injectable()
export class MapService {
  static handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  constructor(private http: HttpClient) {}

  getMapData(): Observable<any> {
    return this.http
      .get('./assets/us.json')
      .map(response => response)
      .catch(MapService.handleError);
  }

  getContinentData(): Observable<any> {
    return this.http
      .get('./assets/north-america.json')
      .map(response => response)
      .catch(MapService.handleError);
  }

  getCities(): Observable<any> {
    return this.http.get('./assets/majorCities.csv');
    // .map((res) => this.mapMajorCityData(res))
    // .catch(this.handleError);
  }

  getWorldMapData(): Observable<any> {
    return this.http
      .get('./assets/world-countries.json')
      .map(response => response)
      .catch(MapService.handleError);
  }

  mapMajorCityData(res) {
    console.log('mapMajorCityData ', res);
    // res.forEach((d,i)=>{
    //
    //
    // })
  }
}
