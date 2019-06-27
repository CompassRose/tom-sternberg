import { Component, OnInit } from '@angular/core';
import { ChartConfigService } from '../services/chart-config.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(public quoteService: ChartConfigService) {}

  public detailRows = [];

  ngOnInit(): any {
    // updates details filter
    this.quoteService.newQuoteSubject.subscribe(data => {
      this.detailRows = data;
    });
  }

}
