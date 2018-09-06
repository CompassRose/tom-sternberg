import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    EventEmitter,
    ViewEncapsulation,
    Injectable,
} from '@angular/core';

@Injectable()
export class TeamService {
    teamId: number;
    teamName: string;
    ownerNames: any;
    playerList = [];

    constructor(teamId: number, franchiseName: string, franchiseOwner: string) {
        // console.log('TeamService ', franchiseName);
        this.teamId = teamId;
        this.teamName = franchiseName;
        this.ownerNames = franchiseOwner;
    }
}
