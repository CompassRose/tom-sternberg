import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngb-picture-modal-component',
  styleUrls: ['ngb-picture-modal.component.scss'],
  templateUrl: 'ngb-picture-modal.component.html'
})
export class NgbdPictureModalComponent implements OnInit {
  @Input()
  activePicture;
  @Input()
  activeProcess;

  file: any;
  public process;
  public picture: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.picture = this.activePicture;
    this.process = this.activeProcess;
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    const str = this.file.name.slice(0, -4);
    console.log('this.file', ' this.picture ', this.picture, ' ', str);
  }
}
