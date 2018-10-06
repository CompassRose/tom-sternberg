import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  AfterViewInit,
  Pipe,
  PipeTransform
} from '@angular/core';
import { Picture } from '../models/picture';
import { PictureService } from '../services/picture.service';
import { CustomTooltipComponent } from '../../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from '../../shared/components/ngb-modal/ngb-modal.component';
import { NgbdPictureModalComponent } from '../../shared/components/ngb-picture-modal/ngb-picture-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/take';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  providers: [
    PictureService,
    CustomTooltipComponent,
    NgbModal,
    NgbActiveModal,
    NgbdModalComponent,
    NgbdPictureModalComponent
  ]
})
export class PicturesComponent implements OnInit {
  public pictures: Picture[] = [];
  private activeCategory = [];
  pictureCategories = [];
  public activeFilters: string[] = [];
  activePictures: Picture[];

  public showTip = false;
  public toolTitle: string;
  public toolValues: string;
  public tooltipPositionX;
  public tooltipPositionY;

  picture = new Picture();

  public observable: Observable<number>;
  public pictureChecker: Observable<Picture[]>;
  public PICTURE_PATH = '../assets/img/pictureCollection/';

  allPictures: Observable<Picture[]>;
  singlePicture: Observable<Picture>;

  // First char Upper rest Lower
  static toTitleCase(str) {
    if (str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }

  constructor(private pictureService: PictureService, private modalService: NgbModal) {}

  ngOnInit() {
    this.pictureChecker = this.pictureService.pictures;
    // this.singlePicture = this.pictureService.pictures.pipe(map(pictures => pictures.find(item => item._id === '1')));
    this.pictureService.loadAll();
    // this.pictureService.load('1');
    this.processPictures();
  }

  save(picture: Picture): void {
    this.picture = picture;
    picture.image = this.PICTURE_PATH + 'default';
    this.pictureService.create(picture);
  }

  deletePicture(picture: string) {
    this.pictureService.remove(picture);
  }

  getPictureCollection(): any {
    return this.pictureService.getPictures();
  }

  processPictures() {
    this.pictureChecker.subscribe(data => {
      data.map(d => {
        if (d.image === this.PICTURE_PATH + 'default' || d.image === undefined || d.image === null) {
          d.image = 'default';
        }
        this.filterByCategory(d);
      });
      this.pictureCategories[0] = { name: 'All', checked: true };
      this.addFilter('All');
      this.pictureCategories[0].checked = true;
    });
  }

  update(): void {
    this.pictureService.updatePicture(this.picture).subscribe(result => console.log('Picture Updated Successfully!'));
  }

  activateEditRoute(pic) {
    this.openPictureModal(pic);
  }

  activateAddRoute(pic) {
    this.openPictureModal(false);
  }

  openPictureModal(e) {
    const modalRef = this.modalService.open(NgbdPictureModalComponent, {
      backdrop: 'static'
    });
    if (e) {
      modalRef.componentInstance.activePicture = e;
      modalRef.componentInstance.activeProcess = 'Edit';
    } else {
      modalRef.componentInstance.activePicture = new Picture();
      modalRef.componentInstance.activeProcess = 'Add';
    }
    modalRef.result.then(userResponse => {
      // If didnt press cancel
      if (userResponse) {
        this.picture = userResponse;
        if (e) {
          this.update();
        } else {
          this.save(userResponse);
        }
      }
    });
  }

  // Decides to add or remove filters and acts accordingly
  filterTriage(e, cat) {
    if (e.target.checked) {
      this.addFilter(cat);
    } else {
      this.removeFilter(cat);
    }
  }

  // Splices from the filter collection and draws list
  removeFilter(cat) {
    const index = this.activeFilters.indexOf(cat);
    this.activeFilters.splice(index);
    this.drawPictureList();
  }

  // Adds to the filter collection and calls draw
  addFilter(cat) {
    if (cat === 'All') {
      this.resetAll();
      this.activeFilters = [];
      this.activeFilters.push(cat);
    } else {
      if (this.activeFilters[0] === 'All') {
        this.activeFilters = [];
        this.pictureCategories[0].checked = false;
      }
      this.activeFilters.push(cat);
    }
    this.drawPictureList();
  }

  resetAll() {
    this.pictureCategories.map(item => {
      item.checked = false;
    });
  }

  // Draws selected picture categories
  drawPictureList() {
    this.activePictures = [];
    this.pictures.forEach((d, i) => {
      if (this.activeFilters[0] === 'All' || !this.activeFilters[0]) {
        this.activePictures.push(d);
      } else {
        this.activeFilters.forEach(c => {
          if (d.keyword === c) {
            this.activePictures.push(d);
          }
        });
      }
      this.filterByCategory(d);
    });
  }

  // Sets up category list and capitalizes
  filterByCategory(picture) {
    if (!this.activeCategory.includes(picture.keyword)) {
      this.activeCategory.push(picture.keyword);
      this.pictureCategories.push({
        name: PicturesComponent.toTitleCase(picture.keyword),
        checked: false
      });
    }
  }

  // custom tooltip called
  onMouseOver(e, pic) {
    this.showTip = true;
    this.toolTitle = pic.title;
    this.toolValues = pic.description;
    this.tooltipPositionX = e.clientX;
    this.tooltipPositionY = e.clientY;
  }

  onMouseLeave() {
    this.showTip = false;
  }

  openModal(e) {
    console.log(e);
    const modalRef = this.modalService.open(NgbdModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.activeIndex = e;
    modalRef.componentInstance.modalGroup = this.pictureChecker;
  }
}
