import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
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

    public allTeams = [];
    public draggedItem: any;
    public observable: Observable<any>;
    public timevalue = 45;
    public searchText: string;

    constructor(private teamService: TeamService) {}

    ngOnInit() {
        if (localStorage.getItem('teams') === null) {
            this.getTeamCollection();
            console.log('EMPTY ');
        } else {
            this.getStoredData();
        }
    }

    // Starts Timer
    callObservable() {
        this.observable = this.getObservable();
    }

    // Timer
    getObservable() {
        return Observable.interval(1000)
            .take(this.timevalue)
            .map(v => {
                if (v === this.timevalue - 1) {
                    const audio = new Audio('../assets/sounds/desk-bells.mp3');
                    audio.play();
                }
                return Number(v + 1);
            });
    }

    deleteStoredData() {
        localStorage.removeItem('teams');
        this.getTeamCollection();
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

    // If no storage resets team data
    getTeamCollection() {
        this.teamService.getTeamContents().subscribe(data => {
            this.allTeams = data.teams;
            this.allRows = data.players;
            this.activatePos('QB');
        });
    }

    // get localStorage item and distributes
    getStoredData() {
        const teamArray = JSON.parse(localStorage.getItem('teams'));
        this.allTeams = teamArray.teams;
        this.allRows = teamArray.players;
        this.activatePos('QB');
    }

    // Remove from x press
    removeItem(tid, pid) {
        const elementPos = this.allRows
            .map(function(x) {
                return x.playername;
            })
            .indexOf(this.allTeams[tid].playerList[pid].pname);
        // const objectFound = this.allRows[elementPos];
        this.allRows[elementPos].picked = 0;
        this.allTeams[tid].playerList[pid].pname = 'Empty';
        this.allTeams[tid].playerList[pid].pos = 'pos';
        this.allTeams[tid].playerList[pid].pteam = '';
        this.saveAllData();
    }

    // Called when lets go
    dragEnd(player) {
        this.draggedItem = player;
        // if (player.picked === 0) {
        //     console.log('draggedItem ', this.draggedItem.picked, ' player ', player);
        // }
    }

    onDrop(teamPlayer, ID) {
        if (
            this.draggedItem.picked !== 1 &&
            this.allTeams[ID].playerList[teamPlayer.pid].pos === 'pos'
        ) {
            this.allTeams[ID].playerList[teamPlayer.pid].pname = this.draggedItem.playername;
            this.allTeams[ID].playerList[teamPlayer.pid].pos = this.draggedItem.position;
            this.allTeams[ID].playerList[teamPlayer.pid].pteam = this.draggedItem.team;
            this.draggedItem.picked = 1;
            this.saveAllData();
        }
    }

    saveAllData() {
        const teamAllData = JSON.stringify({ teams: this.allTeams, players: this.allRows });
        localStorage.setItem('teams', teamAllData);
    }
}
