import {Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output} from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './services/picture.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomTooltipComponent} from '../shared/components/custom-tooltip/custom-tooltip.component';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  providers: [PicturesComponent, PictureService, CustomTooltipComponent]
})
export class FamilyComponent implements OnInit {

  public pictures = [];

  constructor(
    private picturesComponent: PicturesComponent,
    private tooltipComponent: CustomTooltipComponent,
    private _pictureService: PictureService,
    private modalService: NgbModal) {}

  ngOnInit() {
  }

}
