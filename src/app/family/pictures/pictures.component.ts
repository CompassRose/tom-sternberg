import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Picture} from '../models/picture';
import {ICategory} from '../models/category';
import {PictureService} from '../services/picture.service';
import {CustomTooltipComponent} from '../../shared/components/custom-tooltip/custom-tooltip.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent} from '../../shared/components/ngb-modal/ngb-modal.component';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  providers: [PictureService, CustomTooltipComponent, NgbModal, NgbActiveModal, NgbdModalComponent]
})


export class PicturesComponent {
  public pictures: any[] = [];
  private activeCategory = [];
  pictureCategories = [];
  public activeFilters: string[] = [];
  activePictures: any[];

  public showTip = false;
  public toolTitle: string;
  public toolValues: string;
  public tooltipPositionX;
  public tooltipPositionY;

  // First char Upper rest Lower
  static toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  constructor(
    private _pictureService: PictureService,
    private modalService: NgbModal) {
    this.getPictureCollection();
  }


  getPictureCollection(): void {
    this._pictureService.getPictureContents()
      .subscribe(data => {
        this.pictures = data;
        this.activePictures = data;
        this.pictureCategories[0] = {name: 'All', status: true};
        this.addFilter('All');
      });
  }

  // Decides to add or remove filters and acts accordingly
  filterTriage(e, cat) {
    if (e.target.checked === true) {
      this.addFilter(cat);
    } else {
      this.removeFilter(cat);
    }
  }

  // Splices from the filter collection and draws list
  removeFilter(cat) {
    console.log('cat ', cat);
    const index = this.activeFilters.indexOf(cat);
    this.activeFilters.splice(index);
    this.drawPictureList();
  }

  // Adds to the filter collection and calls draw
  addFilter(cat) {
    if (cat === 'All') {
      this.activeFilters = [];
      this.activeFilters.push(cat);
    } else {
      if (this.activeFilters[0] === 'All') {
        this.activeFilters = [];
      }
      this.activeFilters.push(cat);
    }
    this.drawPictureList();
  }

  // Draws selected picture categories
  drawPictureList() {
    this.activePictures = [];
    this.pictures.forEach((d, i) => {
      if (this.activeFilters[0] === 'All' || !this.activeFilters[0]) {
        this.activePictures.push(d);
      } else {
        this.activeFilters.forEach((c) => {
          console.log('c ', c);
          if (d.keyword === c) {
            this.activePictures.push(d);
          }
        });
      }
      this.filterByCategory(d);
    });
  }

  // Sets up category list and capitolizes
  filterByCategory(picture) {
    if (!this.activeCategory.includes(picture.keyword)) {
      this.activeCategory.push(picture.keyword);
      this.pictureCategories.push({name: PicturesComponent.toTitleCase(picture.keyword), status: true});
    }
  }

  // custom tooltip called
  onMouseOver(e, pic) {
    this.showTip = true;
    this.toolTitle = pic.name;
    this.toolValues = pic.bio;
    this.tooltipPositionX = e.clientX + 80;
    this.tooltipPositionY = e.clientY;
  }

  onMouseLeave() {
    this.showTip = false;
  }


  openModal(e) {
    const modalRef = this.modalService.open(NgbdModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.index = e;
    modalRef.componentInstance.modalName = this.pictures[e].name;
    modalRef.componentInstance.modalGroup = this.pictures;
    // console.log('openModal modalRef ', modalRef.componentInstance);
  }
}
