import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Picture } from '../models/picture';
import { ICategory } from '../models/category';
import { PictureService } from '../services/picture.service';
import {CustomTooltipComponent} from '../../shared/components/custom-tooltip/custom-tooltip.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent} from '../../shared/components/ngb-modal/ngb-modal.component';


@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss'],
  providers: [PictureService, CustomTooltipComponent, NgbModal, NgbActiveModal, NgbdModalComponent ]
})


export class PicturesComponent implements OnInit {
  public pictures: any[] = [];
  private categoryTemp = [];
//  pictureCategories: ICategory[] = [];

  pictureCategories: any[] = [];

  public filterArr = [];
  public filter: string;

  public showTip = false;
  public toolTitle: string;
  public toolValues: string;

  public tooltipPositionX;
  public tooltipPositionY;

  constructor(
    private _pictureService: PictureService,
    private modalService: NgbModal,
    private tooltipComponent: CustomTooltipComponent) { }



    // First char Upper rest Lower
  static toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }



  // All filters removed
  static noFilter(filterObj) {
    for (const key in filterObj) {
      if (filterObj[key]) {
        return false;
      }
    }
    return true;
  }


  ngOnInit(): void {
    this.updateUsers();
  }

  updateUsers(): void {
    this._pictureService.getPictureContents()
      .subscribe(data => {
        this.pictures = data;
        console.log('updateFilters ',  this.pictures);
        this.callToFilter();
      });
  }

  initToolEvent(e) {
    this.showTip = true;
    this.tooltipPositionX = e.x;
    this.tooltipPositionY = e.y;
    this.toolTitle = e.values.key;
    this.toolValues = e.values.values;
  }

  setCheckValues(index: number): any {
    this.pictureCategories.forEach((d, i) => {
      this.pictureCategories[index].status = !this.pictureCategories[index].status;
    });
    console.log('Checked ', this.pictureCategories);
  }

  callToFilter() {
    this.pictures.forEach((d, i) => {
      this.filterByCategory(d);
    });
    console.log('this.pictureCategories', this.pictureCategories);
  }


  filterByCategory (picture) {
    if (!this.categoryTemp.includes(picture.keyword)) {
      this.categoryTemp.push( PicturesComponent.toTitleCase(picture.keyword));
      this.pictureCategories.push({name: PicturesComponent.toTitleCase(picture.keyword), status: false});
    }
  }


  hideToolEvent() {
    this.showTip = false;
  }




  updateFilters(e) {

    this.pictures.forEach((d, i) => {

      if ( d.keyword === e ) {

      }

    });
    console.log('updateFilters ', e);
  }


  onMouseOver(e, pic) {
    this.showTip = true;
    this.toolTitle = pic.name;
    this.toolValues = pic.bio;
    this.tooltipPositionX = e.clientX - 280;
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
    console.log('openModal modalRef ', modalRef.componentInstance);
  }
}
