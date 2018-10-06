import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngb-transclude-modal-component',
  styleUrls: ['ngb-transclude-modal.component.scss'],
  templateUrl: 'ngb-transclude-modal.component.html'
})
export class NgbdTranscludeModalComponent implements OnInit {
  @Input()
  modalName;
  @Input()
  modalContent: any[];
  @Input()
  modalButtons;

  public modalTitle;
  public activeContent: any[];
  public activeButtons;

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.modalTitle = this.modalName;
    this.activeContent = this.modalContent;
    this.activeButtons = this.modalButtons;
    this.processBodyContent();
  }

  processBodyContent() {
    // console.log('this.activeContent ', this.activeContent);
    // this.activeContent.forEach(d => {});
  }
}
