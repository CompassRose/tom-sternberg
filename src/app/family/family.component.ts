import { Component, ChangeDetectionStrategy, EventEmitter, OnInit, Output } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { PictureService } from './services/picture.service';
import { CustomTooltipComponent } from '../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTranscludeModalComponent } from '../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';
import { SharedTabComponent } from '../shared/components/shared-tab/shared-tab.component';
import { ParentalService } from './services/ptree.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  providers: [PicturesComponent, PictureService, CustomTooltipComponent, SharedTabComponent, ParentalService]
})
export class FamilyComponent implements OnInit {
  public pictures = [];
  public users;
  public modalButtons = {
    name: 'Close'
  };

  public pictureInstructions = [
    'Family Photo Screen',
    'Hover over pictures for more detailed information',
    'Click on one or more pictures for a larger view',
    'Select All, or one or more dynamically generated checkboxes to filter by category',
    'Load/Edit/Save process forthcoming'
  ];

  public familyTreeInstructions = [
    'Family Tree Screen',
    'Hover forthcoming',
    'Click on forthcoming',
    'Select All forthcoming',
    'Load/Edit/Save process forthcoming'
  ];

  public familyMapInstructions = ['Family Map Screen', 'Hover forthcoming', 'Click on forthcoming', 'Select All forthcoming'];

  private tabContents = [
    { link: 'pictures', name: 'Pictures', instructions: this.pictureInstructions },
    // { link: 'familyTree', name: 'Family Tree' },
    // { link: 'parentTree', name: 'Parent Tree' },
    { link: 'dTree', name: 'Family Tree', instructions: this.familyTreeInstructions },
    { link: 'worldmap-locator', name: 'World Locator', instructions: this.familyMapInstructions }
  ];

  constructor(
    private picturesComponent: PicturesComponent,
    private tooltipComponent: CustomTooltipComponent,
    private _pictureService: PictureService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}
}
