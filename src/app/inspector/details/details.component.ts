import { Component, OnInit, ViewChild } from '@angular/core';
import {DrilldownComponent} from '../drilldown/drilldown.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {

  @ViewChild(DrilldownComponent)
  private drillComponent: DrilldownComponent;


  bring() {
    console.log('bring ', this.drillComponent.getValue());
  }

}
