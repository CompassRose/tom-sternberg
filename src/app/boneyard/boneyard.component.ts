import {Component, OnInit, Input} from '@angular/core';
import {PlayerService} from './services/player.service';
import {TeamService} from './services/team.service';

// import fetch from '../../../node_modules/@types/isomorphic-fetch';

@Component({
  selector: 'app-boneyard',
  templateUrl: './boneyard.component.html',
  styleUrls: ['./boneyard.component.scss'],
  providers: [PlayerService, TeamService]
})


export class BoneyardComponent implements OnInit {
  API_URL = '../assets/testing.json';

  public allRows = [];
  public tempRows = [];
  public playerList = [];

  public teamNames = [
    'Trump Empire',
    'Crushed by Jefferson',
    'Danger is Business',
    'Flying Solo',
    'It Goes to 11',
    'Limelite',
    'Mad n Nervous',
    'Make WAD Great Again',
    'Mother Love Bones',
    'Nuke Em All',
    'Primetime',
    'Spinal Tap Mark 11'];

  public ownerNames = [
    'Tom Sternberg',
    'Norton-Guhlke',
    'Tim Foster',
    'Mike Foster',
    'Griz',
    'Graham-Benskin',
    'Wallebeck-',
    'Milt Turner',
    'Milburn-Smyth',
    'Syltebo-Block',
    'Jeff Foz',
    'Vince Iverson'];


  public teamPlayersList = [
    {pnum: 1, pname: 'Empty 1'},
    {pnum: 2, pname: 'Empty 2'},
    {pnum: 3, pname: 'Empty 3'},
    {pnum: 4, pname: 'Empty 4'},
    {pnum: 5, pname: 'Empty 5'},
    {pnum: 6, pname: 'Empty 6'},
    {pnum: 7, pname: 'Empty 7'},
    {pnum: 8, pname: 'Empty 8'},
    {pnum: 9, pname: 'Empty 9'},
    {pnum: 10, pname: 'Empty 10'},
    {pnum: 11, pname: 'Empty 11'},
    {pnum: 12, pname: 'Empty 12'},
    {pnum: 13, pname: 'Empty 13'},
    {pnum: 14, pname: 'Empty 14'},
    {pnum: 15, pname: 'Empty 15'}
  ];

  public allTeams = [];
  public teamId;
  public draggedItem: any;

  constructor(private playerService: PlayerService) {
    //  console.log('Teams ', this.allTeams);

    for (let i = 0; i < this.teamNames.length; i++) {
      this.teamId = i;
      this.allTeams.push({
        Id: this.teamId,
        teamName: this.teamNames[i],
        ownerName: this.ownerNames[i],
        playerList: this.fillPlayerList(i)
      });
      // console.log('ALLTEAM ', this.allTeams[i]);
    }
  }

  ngOnInit() {
    this.playerService.getCsvData()
      .subscribe(rowData => {
        this.allRows = rowData;
        this.tempRows = this.allRows;
        this.allRows.forEach((d, i) => {
          d.picked = 0;
        });
        this.activatePos('QB');
      });
  }

  // Remove from x press
  removeItem(tid, pid) {
    console.log('removeItem ', tid, ' pid ', pid);
    this.allTeams[tid].playerList[pid].pname = 'Empty';
    this.allTeams[tid].playerList[pid].pos = 'pos';
    this.allTeams[tid].playerList[pid].pteam = '';
    this.allRows.forEach((d, i) => {
      if ( d.Id === this.allTeams[tid].playerList[pid].plistId ) {
        console.log('d ', d);
        d.picked = 0;
        this.allTeams[tid].playerList[pid].plistId = 0;
      }
    });
  }

 // Fill team container with player objects
  fillPlayerList(i) {
    const player = [];
    for (let j = 0; j < 15; j++) {
      player.push({pid: j, pname: 'Empty', filled: 0, pos: 'pos', plistId: 0, pteam: ''});
    }
    return player;
  }


  // Called when lets go
  dragEnd(player) {
    this.draggedItem = player;
    if (player.picked === 0) {
      console.log('draggedItem ', this.draggedItem.picked);
    }
  }


  onDrop(team, element, ID) {
    console.log('picked ', this.draggedItem.picked);
    if (this.draggedItem.picked !== 1 && this.allTeams[ID].playerList[element.pid].pos === 'pos' ) {
      this.allTeams[ID].playerList[element.pid].pname = this.draggedItem.playername;
      this.allTeams[ID].playerList[element.pid].pos = this.draggedItem.position;
      this.allTeams[ID].playerList[element.pid].plistId = this.draggedItem.Id;
      this.allTeams[ID].playerList[element.pid].pteam = this.draggedItem.team;
      this.draggedItem.picked = 1;
      // } else {
      //  console.log('Already Used');
    }
    // console.log('ALLTEAM ', JSON.stringify(this.allTeams[ID], null, 2));
  }


  activatePos(posId) {
    const activePosition = [];
    this.tempRows = this.allRows;
    // console.log('posId ', posId);
    if (posId === 'ALL') {
      this.tempRows = this.allRows;
    } else {
      this.tempRows.forEach(function (d, i) {
        if (d.position === posId) {
          activePosition.push(d);
        }
      });
      this.tempRows = activePosition;
    }
    // console.log('activePosition ', activePosition);
  }
}
