import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-boneyard',
    templateUrl: './boneyard.component.html',
    styleUrls: ['./boneyard.component.scss'],
    providers: [PlayerService, TeamService]
})
export class BoneyardComponent implements OnInit {
    public allRows = [];
    public tempRows = [];
    POST_API_URL = '../assets/newTeamData.json';

    public boneyardTeams = [
        { team: 'Primetime', owners: 'Jeff Foster' },
        { team: 'Limelite', owners: 'Graham-Benskin' },
        { team: 'It Goes to 11', owners: 'Griz' },
        { team: 'Nuke Em All', owners: 'Tom ' },
        { team: 'Make WAD Great Again', owners: 'Milt Turner' },
        { team: 'Trump Empire', owners: 'Tom Sternberg' },
        { team: 'Spinal Tap Mark II', owners: 'Vince Iverson' },
        { team: 'Flying Solo', owners: 'Mike Foster' },
        { team: 'Crushed by Jefferson', owners: 'Norton-Guhlke' },
        { team: 'Mad n Nervous', owners: 'Wallebeck-Boyle' },
        { team: 'Danger is Business', owners: 'Tim Foster' },
        { team: 'Mother Love Bones', owners: 'Milburn-Smyth' }
    ];

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
        'Spinal Tap Mark 11'
    ];

    public ownerNames = [
        'Tom Sternberg',
        'Norton-Guhlke',
        'Tim Foster',
        'Mike Foster',
        'Griz',
        'Graham-Benskin',
        'Wallebeck-Boyle',
        'Milt Turner',
        'Milburn-Smyth',
        'Syltebo-Block',
        'Jeff Foz',
        'Vince Iverson'
    ];

    // 1 - Primetime
    // 2 - Limelite
    // 3 - The Eleven
    // 4 - Nuke Em
    // 5 - WAD
    // 6 - Trump empire
    // 7 - Spinal Tarp
    // 8 - Flying Solo
    // 9 - CBJ
    // 10 - Mad and Nervous
    // 11 - DIMB
    // 12 - MLB

    public allTeams = [];
    public draggedItem: any;

    constructor(
        private teamService: TeamService,
        private playerService: PlayerService,
        private http: HttpClient
    ) {
        //  console.log('Teams ', this.allTeams);
        // for (let i = 0; i < this.teamNames.length; i++) {
        //     this.teamId = i;
        //     this.allTeams.push({
        //         Id: this.teamId,
        //         teamName: this.teamNames[i],
        //         ownerName: this.ownerNames[i],
        //         playerList: this.fillPlayerList(i)
        //     });
        //     // console.log(JSON.stringify(this.allTeams[i], undefined, 2));
        // }
    }

    ngOnInit() {
        if (localStorage.getItem('teams') === null) {
            this.getPlayers(true);
            this.getTeamCollection();
            console.log('EMPTY ');
        } else {
            this.allTeams = this.getStoredData();
            this.getPlayers(false);
        }
    }

    deleteStoredData() {
        localStorage.removeItem('teams');
        this.getPlayers(true);
        this.getTeamCollection();
        console.log('deleteStoredData ');
    }

    getPlayers(state: boolean) {
        this.playerService.getCsvData().subscribe(rowData => {
            this.allRows = rowData;
            console.log(' this.allRows ', this.allRows);

            this.allRows.forEach((d, i) => {
                d.picked = Number(d.picked);
            });

            this.activatePos('QB');
        });
    }

    activatePos(posId) {
        const activePosition = [];
        this.tempRows = this.allRows;
        // console.log('posId ', posId);
        if (posId === 'ALL') {
            this.tempRows = this.allRows;
        } else {
            this.tempRows.forEach(function(d, i) {
                if (d.position === posId) {
                    activePosition.push(d);
                }
            });
            this.tempRows = activePosition;
        }
        // console.log('activePosition ', activePosition);
    }

    getTeamCollection() {
        this.teamService.getTeamContents().subscribe(data => {
            this.allTeams = data.teams;
            console.log('getTeamContents allTeams ', this.allTeams);
            // this.pictures = data;
        });
        // }
        // localStorage.removeItem('teams');
    }

    getStoredData() {
        const teamArray = JSON.parse(localStorage.getItem('teams'));
        return teamArray;
        // console.log('getStoredData ', teamArray);
    }

    // Fill team container with player objects
    fillPlayerList(i) {
        const player = [];
        for (let j = 0; j < 15; j++) {
            player.push({ pid: j, pname: 'Empty', filled: 0, pos: 'pos', plistId: 0, pteam: '' });
        }
        return player;
    }

    getMapData(): Observable<any> {
        const BASE_URL = '../assets/allNewData.json';
        return this.http
            .get(BASE_URL)
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
        return errMsg;
    }

    // Remove from x press
    removeItem(tid, pid) {
        console.log('removeItem ', tid, ' pid ', pid);
        this.allTeams[tid].playerList[pid].pname = 'Empty';
        this.allTeams[tid].playerList[pid].pos = 'pos';
        this.allTeams[tid].playerList[pid].pteam = '';
        this.allRows.forEach((d, i) => {
            if (d.Id === this.allTeams[tid].playerList[pid].plistId) {
                console.log('d ', d);
                d.picked = 0;
                this.allTeams[tid].playerList[pid].plistId = 0;
            }
        });
    }

    // Called when lets go
    dragEnd(player) {
        this.draggedItem = player;
        if (player.picked === 0) {
            console.log('draggedItem ', this.draggedItem.picked, ' player ', player);
        }
    }

    onDrop(team, element, ID) {
        console.log('picked ', team, ' element ', element, ' ID ', ID);
        if (
            this.draggedItem.picked !== 1 &&
            this.allTeams[ID].playerList[element.pid].pos === 'pos'
        ) {
            this.allTeams[ID].playerList[element.pid].pname = this.draggedItem.playername;
            this.allTeams[ID].playerList[element.pid].pos = this.draggedItem.position;
            this.allTeams[ID].playerList[element.pid].plistId = this.draggedItem.Id;
            this.allTeams[ID].playerList[element.pid].pteam = this.draggedItem.team;
            this.draggedItem.picked = 1;
            console.log('saving ', this.allTeams[ID].pname);
            //  this.teamService.httpPutExample(this.allTeams);

            localStorage.setItem('teams', JSON.stringify(this.allTeams));

            // } else {
            // console.log('Already Used');
        }
        console.log('getPlayers ', this.tempRows);
        // console.log('ALLTEAM ', JSON.stringify(this.allTeams[ID], null, 2));
    }
}
