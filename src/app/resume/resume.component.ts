import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameHistoryService } from './services/game-history.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { VideoCardComponent } from './video-card.component';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  providers: [GameHistoryService, VideoCardComponent]
})
export class ResumeComponent implements OnInit {
  public gameHistoryValues$: Observable<any>[];
  public langChoices = [{ bind: 'en', name: 'English' }, { bind: 'fr', name: 'French' }, { bind: 'de', name: 'German' }];
  public openLangSelect = false;
  public activeLanguage = 'English';

  constructor(private http: HttpClient, private gameHistory: GameHistoryService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.retrieveHistory();
  }

  useLanguage(language: string) {
    const index = this.langChoices.findIndex(p => p.bind === language);
    this.activeLanguage = this.langChoices[index].name;
    this.translate.use(language);
    this.openLangSelect = false;
  }

  retrieveHistory() {
    this.gameHistory.getHistoryContents().subscribe(data => {
      this.gameHistoryValues$ = data;
    });
  }
}
