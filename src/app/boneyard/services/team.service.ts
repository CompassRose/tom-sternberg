import {Component, Input, Output, OnInit, OnChanges, EventEmitter, ViewEncapsulation, Injectable} from '@angular/core';

@Injectable()
export class TeamService {

  teamName: string;
  ownerNames: any;
  teamPlayersList = [];

  constructor( franchiseName: string, franchiseOwner: string ) {
   // console.log('TeamService ', franchiseName);
    this.teamName = franchiseName;
    this.ownerNames = franchiseOwner;
     // this.teamName = '';
    // this.ownerNames = [];
    // this.playerList = [];
  }
}
