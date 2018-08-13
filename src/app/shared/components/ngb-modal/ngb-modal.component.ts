import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-component',
  styleUrls: ['ngb-modal.component.scss'],
  templateUrl: 'ngb-modal.component.html'
})

export class NgbdModalComponent implements OnInit {

  public modalRef: any;
  public modalName: string;
  public modalGroup = [];
  public idx: number;

  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.idx = 0;
   // console.log('modal active ', this.idx);
  }


  setOriginBack(num) {
    this.idx = this.idx - num;
    console.log('setOriginBack ', this.idx);
  }

  setOriginForward(num) {
    this.idx = this.idx + num;
   // console.log('setOriginForward ', this.idx);
  }

  open(type) {
    this.modalRef = this.modalService.open(NgbModal);
    console.log('this.modalRef ', type);
   // this.modalRef.componentInstance.modalName = this.modalName;
  }
}





