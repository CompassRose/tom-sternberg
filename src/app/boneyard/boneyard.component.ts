import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {PlayerService} from './services/player.service';
import {TeamService} from './services/team.service';

@Component({
  selector: 'app-boneyard',
  templateUrl: './boneyard.component.html',
  styleUrls: ['./boneyard.component.scss'],
  providers: [PlayerService, TeamService]
})


export class BoneyardComponent implements OnInit, AfterViewInit {

  public allRows = [];
  public tempRows = [];
  public team01Contents = [];

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


  public teamsPlayers = [
    { pnum: 1, pname: 'Empty'},
    { pnum: 2, pname: 'Empty'},
    { pnum: 3, pname: 'Empty'},
    { pnum: 4, pname: 'Empty'},
    { pnum: 5, pname: 'Empty'},
    { pnum: 6, pname: 'Empty'},
    { pnum: 7, pname: 'Empty'},
    { pnum: 8, pname: 'Empty'},
    { pnum: 9, pname: 'Empty'},
    { pnum: 10, pname: 'Empty'},
    { pnum: 11, pname: 'Empty'},
    { pnum: 12, pname: 'Empty'},
    { pnum: 13, pname: 'Empty'},
    { pnum: 14, pname: 'Empty'},
    { pnum: 15, pname: 'Empty'}
  ];

  public allTeams = [];
// @Input() team01Owners: any;

  public team0: any;
  public team1: any;
  public team2: any;
  public team3: any;
  public team4: any;
  public team5: any;
  public team6: any;
  public team7: any;
  public team8: any;
  public team9: any;
  public team10: any;
  public team11: any;


  constructor(private playerService: PlayerService) {
    console.log('Teams ', this.allTeams);
    this.allTeams.push(this.team0 = new TeamService(this.teamNames[0], this.ownerNames[0]));
    this.allTeams.push(this.team1 = new TeamService(this.teamNames[1], this.ownerNames[1]));
    this.allTeams.push(this.team2 = new TeamService(this.teamNames[2], this.ownerNames[2]));
    this.allTeams.push(this.team3 = new TeamService(this.teamNames[3], this.ownerNames[3]));
    this.allTeams.push(this.team4 = new TeamService(this.teamNames[4], this.ownerNames[4]));
    this.allTeams.push(this.team5 = new TeamService(this.teamNames[5], this.ownerNames[5]));
    this.allTeams.push(this.team6 = new TeamService(this.teamNames[6], this.ownerNames[6]));
    this.allTeams.push(this.team7 = new TeamService(this.teamNames[7], this.ownerNames[7]));
    this.allTeams.push(this.team8 = new TeamService(this.teamNames[8], this.ownerNames[8]));
    this.allTeams.push(this.team9 = new TeamService(this.teamNames[9], this.ownerNames[9]));
    this.allTeams.push(this.team10 = new TeamService(this.teamNames[10], this.ownerNames[10]));
    this.allTeams.push(this.team11 = new TeamService(this.teamNames[11], this.ownerNames[11]));
  }

  ngOnInit() {

    this.playerService.getCsvData()
      .subscribe(rowData => {
        this.allRows = rowData;
        this.tempRows = this.allRows;
         console.log('tempRows Data ', this.tempRows);
        this.activatePos('QB');
      });
  }


  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
  }


  activatePos(posId) {
    const activePosition = [];
    this.tempRows = this.allRows;
    console.log('posId ', posId);
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
    console.log('activePosition ', activePosition);
  }
}
