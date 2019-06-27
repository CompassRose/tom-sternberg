import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GameHistoryService } from './services/game-history.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

// import { VideoCardComponent } from './video-card.component';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  providers: [GameHistoryService]
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

  //   function LinkedList() {
  //     this.head = null;
  //     this.tail = null;
  //     this.length = 0;
  //   }
  //
  //   function Node() {
  //     this.next = null;
  //     this.prev = null;
  //     this.content = null;
  //   }
  //
  //   LinkedList.prototype.add = function(_content) {
  //     const node = new Node();
  //     node.content = _content;
  //
  //     if (this.head === null) {
  //       this.head = node;
  //       this.length = 1;
  //       return node;
  //     }
  //     if (this.tail === null) {
  //       this.tail = node;
  //       this.tail.prev = this.head;
  //       this.head.next = this.tail;
  //       this.length = 2;
  //       return node;
  //     }
  //
  //     this.tail.next = node;
  //     node.prev = this.tail;
  //     this.tail = node;
  //     return node;
  //   };
  //
  //   let aList = new LinkedList();
  //
  //   LinkedList.prototype.print = function() {
  //     if (this.head === null) {
  //       return 'Empty List';
  //     }
  //
  //     let s = '';
  //     let node = this.head;
  //     while (node !== null) {
  //       s += node.content + ' ';
  //       node = node.next;
  //     }
  //     return s;
  //   };
  //
  //
  // }
  //
  // addNode(e) {
  //   console.log('addNode ', e.target.value);
  //   aList.add(c);
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
