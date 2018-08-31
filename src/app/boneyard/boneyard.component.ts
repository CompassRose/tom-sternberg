import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

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
    public timerValue = 0;
    public intervalSetter;

    POST_API_URL = '../assets/newTeamData.json';

    // Draft Order
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
    public observable: Observable<any>;
    public timevalue = 30;
    public searchText: string;

    constructor(private teamService: TeamService, private http: HttpClient) {}

    ngOnInit() {
        if (localStorage.getItem('teams') === null) {
            this.getTeamCollection();
            console.log('EMPTY ');
        } else {
            this.getStoredData();
        }
    }

    callObservable() {
        this.observable = this.getObservable();
    }

    getObservable() {
        return Observable.interval(1000)
            .take(this.timevalue)
            .map(v => v);
    }

    deleteStoredData() {
        localStorage.removeItem('teams');
        this.getTeamCollection();
        console.log('deleteStoredData ');
    }

    activatePos(posId) {
        const activePosition = [];
        this.tempRows = this.allRows;
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
    }

    getTeamCollection() {
        this.teamService.getTeamContents().subscribe(data => {
            this.allTeams = data.teams;
            this.allRows = data.players;
            this.activatePos('QB');
            // console.log('getTeamContents allTeams ', data);
        });
    }

    getStoredData() {
        const teamArray = JSON.parse(localStorage.getItem('teams'));
        this.allTeams = teamArray.teams;
        this.allRows = teamArray.players;
        this.activatePos('QB');
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
            const teamAllData = JSON.stringify({ teams: this.allTeams, players: this.allRows });
            localStorage.setItem('teams', teamAllData);
            //  console.log('\n\n ALL ', teamAllData);
        }
    }
}
