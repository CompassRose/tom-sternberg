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
  myDate: [null];
  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };
  // model: IAddYear;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    // this.model.mydate = { jsdate: new Date('7/08/2018') };
    this.picture = this.activePicture;
    this.process = this.activeProcess;
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    const str = this.file.name.slice(0, -4);
    console.log('this.file', ' this.picture ', this.picture, ' ', str);
  }
}
