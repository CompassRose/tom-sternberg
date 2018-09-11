import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameHistoryService } from './services/game-history.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    providers: [GameHistoryService]
})
export class ResumeComponent implements OnInit {
    public gameHistoryValues$: Observable<any>[];

    constructor(private http: HttpClient, private gameHistory: GameHistoryService) {}

    ngOnInit() {
        this.retrieveHistory();
    }

    retrieveHistory() {
        this.gameHistory.getHistoryContents().subscribe(data => {
            this.gameHistoryValues$ = data;
        });
    }

    private handleError(error: any) {
        const errMsg = error.message
            ? error.message
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
