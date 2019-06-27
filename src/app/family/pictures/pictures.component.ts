import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Picture } from '../models/picture';
import { PictureService } from '../services/picture.service';
import { CustomTooltipComponent } from '../../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from '../../shared/components/ngb-modal/ngb-modal.component';
import { NgbdPictureModalComponent } from '../../shared/components/ngb-picture-modal/ngb-picture-modal.component';

import 'rxjs/add/operator/take';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { NgbdVideoModalComponent } from '../../shared/components/ngb-video-modal/ngb-video-modal.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  providers: [PictureService, CustomTooltipComponent, NgbModal, NgbActiveModal, NgbdModalComponent, NgbdPictureModalComponent]
})
export class PicturesComponent implements OnInit {
  public pictures: Picture[] = [];
  pictureCategories = [];
  public activeFilters = [];

  public showTip = false;
  public toolTitle: string;
  public toolValues: string;
  public tooltipPositionX;
  public tooltipPositionY;

  public autoCompleteValues = [];

  public searchText: string;
  public picture = new Picture();
  public pictureChecker: Observable<Picture[]>;
  public PICTURE_PATH = '../assets/img/pictureCollection/';
  private activeCategory = [];
  private subjectList: string[] = [];

  public videoContents = {
    projectName: 'Person -- Subject: ',
    projectPlatform: 'Explaining --contents--',
    projectRole: 'Year:, Stories, ',
    video: 'https://www.youtube.com/embed/jenWdylTtzs?autoplay=1'
  };

  // First char Upper rest Lower
  static toTitleCase(str) {
    // console.log('toTitleCase ', str);
    if (str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  }

  constructor(private pictureService: PictureService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.pictureChecker = this.pictureService.pictures;
    this.pictureService.loadAll();
    this.processPictures();
  }

  save(picture: Picture): void {
    this.picture = picture;
    picture.image = this.PICTURE_PATH + 'default';
    this.pictureService.createPicture(picture);
    this.addFilter('All');
  }

  deletePicture(picture: Picture) {
    this.pictureService.removePicture(picture._id);
    this.showTip = false;
    this.removeFilter(picture);
    this.removeCategory(picture);
  }


  processPictures() {
    this.pictureCategories = [];
    this.pictureCategories[0] = { name: 'All', checked: true };
    this.pictureCategories[0].checked = true;

    this.pictureChecker.subscribe(data => {
      data.map(d => {
        this.setAssociationArray(d.associations);
        if (d.image === this.PICTURE_PATH + 'default' || d.image === undefined || d.image === null) {
          d.image = 'default';
        }
        this.collectCategory(d);
      });
    });
    if (!this.activeFilters[0]) {
      this.addFilter('All');
    }
    this.pictureCategories[0].checked = true;
  }


  // Sets up picture subjects to search by Person
  setAssociationArray(assoc): any {
    console.log('setAssociationArray ', assoc);
    assoc.forEach(d => {
      if (!this.subjectList.includes(d)) {
        this.subjectList.push(d);
      }
    });
  }


  // Sets up category list and capitalizes
  collectCategory(picture) {
    if (!this.activeCategory.includes(picture.keyword)) {
      this.activeCategory.push(picture.keyword);
      this.pictureCategories.push({
        name: PicturesComponent.toTitleCase(picture.keyword),
        checked: false
      });
    }
  }


  // From search to set filters from search list
  setPicturesFromSearch(newData) {
    const testFilter1 = [];
    this.pictureChecker.subscribe(data => {
      data.forEach(d => {
        if (d.associations.includes(PicturesComponent.toTitleCase(newData))) {
          testFilter1.push(d);
        }
      });
      console.log('testFilter1 ', testFilter1);
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


  // Adds to the filter collection and calls draw
  addFilter(cat) {
    if (cat === 'All') {
      this.resetAll();
      this.activeFilters = ['All'];
    } else {
      if (this.activeFilters[0] === 'All') {
        this.activeFilters = [];
        this.pictureCategories[0].checked = false;
      }
      this.activeFilters.push(cat);
    }
  }

  // Splices from the filter collection and draws list
  removeFilter(cat) {
    const index = this.activeFilters.indexOf(cat);
    this.activeFilters.splice(index);
    if (!this.activeFilters[0]) {
      this.addFilter('All');
      this.pictureCategories[0].checked = true;
    }
  }

  // Removes filter checkbox
  removeCategory(picture) {
    const test1 = [];
    this.pictureChecker.subscribe(data => {
      data.forEach(d => {
        if (d.keyword === picture.keyword) {
          test1.push(d);
        }
      });
    });
    if (test1.length === 1) {
      const index = this.pictureCategories.findIndex( p => p.attr1 === picture.keyword);
      this.pictureCategories.splice(index);
    }
  }

  resetAll() {
    this.pictureCategories.map(item => {
      item.checked = false;
    });
  }

  update(): void {
    this.pictureService.updatePicture(this.picture).subscribe(result => console.log('Picture Updated Successfully!'));
  }

  activateEditRoute(pic) {
    this.openPictureModal(pic);
  }

  activateAddRoute() {
    this.showTip = false;
    this.openPictureModal(false);
  }

  openVideoModal(e) {
    const modalRef = this.modalService.open(NgbdVideoModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.modalName = this.videoContents.video;
    modalRef.componentInstance.modalGroup = this.videoContents.projectName;
    modalRef.componentInstance.description = this.videoContents;
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

  // custom tooltip called
  onMouseOver(e, pic) {
    // this.showTip = true;
    this.toolTitle = pic.title;
    this.toolValues = pic.description;
    this.tooltipPositionX = e.clientX;
    this.tooltipPositionY = e.clientY;
  }

  onMouseLeave() {
    this.showTip = false;
  }

  openModal(e) {
    const pictureGroup: Picture[] = [];
    this.pictureChecker.subscribe(data => {
      data.map(d => {
        this.activeFilters.forEach(f => {
          if (d.keyword === f) {
            pictureGroup.push(d);
          } else {
            pictureGroup.push(d);
          }
        });
      });
    });
    const modalRef = this.modalService.open(NgbdModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.activeIndex = e;
    modalRef.componentInstance.modalGroup = pictureGroup;
  }
}
