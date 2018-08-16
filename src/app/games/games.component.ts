import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';



@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('GamesComponent');
  }

}
