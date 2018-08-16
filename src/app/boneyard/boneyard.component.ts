import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-boneyard',
    templateUrl: './boneyard.component.html',
    styleUrls: ['./boneyard.component.scss'],
    providers: [PlayerService, TeamService],
})
export class BoneyardComponent implements OnInit {
    public allRows = [];
    public tempRows = [];

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
        { team: 'Mother Love Bones', owners: 'Milburn-Smyth' },
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
        'Spinal Tap Mark 11',
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
        'Vince Iverson',
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
                playerList: this.fillPlayerList(i),
            });
            // console.log('ALLTEAM ', this.allTeams[i]);
        }
    }

    ngOnInit() {
        this.playerService.getCsvData().subscribe(rowData => {
            this.allRows = rowData;
            this.tempRows = this.allRows;
            this.allRows.forEach((d, i) => {
                d.picked = 0;
            });
            this.activatePos('QB');
        });
    }

    getStoredData() {
        const array = JSON.parse(localStorage.getItem('array'));
        console.log('getStoredData ', array);
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

    // Fill team container with player objects
    fillPlayerList(i) {
        const player = [];
        for (let j = 0; j < 15; j++) {
            player.push({ pid: j, pname: 'Empty', filled: 0, pos: 'pos', plistId: 0, pteam: '' });
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
        if (
            this.draggedItem.picked !== 1 &&
            this.allTeams[ID].playerList[element.pid].pos === 'pos'
        ) {
            this.allTeams[ID].playerList[element.pid].pname = this.draggedItem.playername;
            this.allTeams[ID].playerList[element.pid].pos = this.draggedItem.position;
            this.allTeams[ID].playerList[element.pid].plistId = this.draggedItem.Id;
            this.allTeams[ID].playerList[element.pid].pteam = this.draggedItem.team;
            this.draggedItem.picked = 1;

            localStorage.setItem('array', JSON.stringify(this.allTeams));
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
            this.tempRows.forEach(function(d, i) {
                if (d.position === posId) {
                    activePosition.push(d);
                }
            });
            this.tempRows = activePosition;
        }
        console.log('activePosition ', activePosition);
    }
}
