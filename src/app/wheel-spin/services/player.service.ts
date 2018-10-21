import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Player } from '../models/player';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Observable<Player[]>;
  private playersUrl = 'http://localhost:4000/api';
  private _players: BehaviorSubject<Player[]>;

  static handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  constructor(private http: HttpClient) {
    this._players = <BehaviorSubject<Player[]>>new BehaviorSubject([]);
    this.players = this._players.asObservable();
  }

  loadAllPlayers() {
    return this.http.get<Player[]>(`${this.playersUrl}/players`).catch(PlayerService.handleError);
  }

  updatePlayer(player: Player): Observable<any> {
    return this.http.put(`${this.playersUrl}/players`, player, httpOptions);
  }
}
