import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngbd-video-modal-component',
    styleUrls: ['ngb-video-modal.component.scss'],
    templateUrl: 'ngb-video-modal.component.html',
})
export class NgbdVideoModalComponent implements OnInit {
    @Input()
    modalName;
    @Input()
    modalGroup;
    public videoPlayer = true;
    public videoSignal;
    public gameName;

    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

    ngOnInit() {
        console.log('ngOnInit ', this.modalName);
        this.videoSignal = this.modalName;
        this.gameName = this.modalGroup;
    }

    stopVideo() {
        this.videoPlayer = false;
    }
}
