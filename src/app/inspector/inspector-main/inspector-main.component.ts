import { Component, OnInit } from '@angular/core';
import {ChartConfigService} from '../services/chart-config.service';

@Component({
  selector: 'app-inspector-main',
  templateUrl: './inspector-main.component.html',
  styleUrls: ['./inspector-main.component.scss'],
  providers: [ChartConfigService]
})
export class InspectorMainComponent implements OnInit {


  constructor(private quoteService: ChartConfigService) { }

  ngOnInit() {
   // console.log('Inspector Main');
  }

}
