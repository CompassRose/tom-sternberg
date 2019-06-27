import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { timeFormat } from 'd3-time-format';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgbdTranscludeModalComponent } from '../../shared/components/ngb-transclude-modal/ngb-transclude-modal.component';
import { CustomTooltipComponent } from '../../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const BASE_URL = '../../assets/data-collections/d3ParentTree.json';
const BASE_DATA_URL = '../../assets/data-collections/d3Functions.json';
const D3_DATA_URL = '../../assets/data-collections/d3Tree.json';

@Injectable()
export class ParentalService {
  public showTip = false;
  public toolTitle: string;
  public toolValues: string;
  public tooltipPositionX;
  public tooltipPositionY;
  public detailData;
  public globalTreeSubject = new BehaviorSubject<any>(this.detailData);

  static handleError(error: any) {
    const errMsg = error.message ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }

  constructor(private tooltip: CustomTooltipComponent, private _http: HttpClient, private modalService: NgbModal) {}

  // Called from behavior subject
  getTreeSubjectData(newList) {
    console.log('getTreeSubjectData ', newList);
    this.globalTreeSubject.next(newList);
  }

  // onMouseOver(name, extra) {
  //   this.showTip = true;
  //   this.toolTitle = name;
  //   this.toolValues = extra;
  //   this.tooltipPositionX = e.clientX;
  //   this.tooltipPositionY = e.clientY;
  // }

  // onMouseLeave() {
  //   this.showTip = false;
  // }

  openModal(name, extra) {
    const temp = [];
    temp.push(extra);
    console.log('openModal ', name, ' extra ',  extra);
    const modalRef = this.modalService.open(NgbdTranscludeModalComponent, {
      size: 'lg',
      windowClass: 'modal-xxl'
    });
    modalRef.componentInstance.modalName = name;
    modalRef.componentInstance.modalContent = temp;
    // modalRef.componentInstance.modalButtons = 'Close';
  }
  getGlobalTreeData(): Observable<any> {
    return this._http
      .get(D3_DATA_URL)
      .map(response => this.handleTreeData(response))
      .catch(ParentalService.handleError);
  }

  handleTreeData(res) {
    this.detailData = res;
    return this.detailData;
  }

  getParentalData(): Observable<any> {
    return this._http
      .get(BASE_URL)
      .map(response => response)
      .catch(ParentalService.handleError);
  }

  getDescendantData(): Observable<any> {
    return this._http
      .get(BASE_DATA_URL)
      .map(response => response)
      .catch(ParentalService.handleError);
  }
}
