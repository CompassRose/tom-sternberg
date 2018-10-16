import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngb-modal-component',
  styleUrls: ['ngb-modal.component.scss'],
  templateUrl: 'ngb-modal.component.html'
})
export class NgbdModalComponent implements OnInit {
  @Input()
  activeIndex;
  @Input()
  modalGroup;

  public activeContent;
  public idx: number;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.idx = this.modalGroup.indexOf(this.activeIndex);
    this.activeContent = this.modalGroup;
  }

  setOriginBack() {
    if (this.idx > 0) {
      this.idx--;
    } else {
      this.idx = this.activeContent.length - 1;
    }
  }

  setOriginForward() {
    if (this.idx < this.activeContent.length - 1) {
      this.idx++;
    } else {
      this.idx = 0;
    }
  }
}
