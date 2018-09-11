import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngbd-video-modal-component',
    styleUrls: ['ngb-video-modal.component.scss'],
    templateUrl: 'ngb-video-modal.component.html'
})
export class NgbdVideoModalComponent implements OnInit {
    @Input()
    modalName;
    @Input()
    modalGroup;
    @Input()
    description;
    public videoPlayer = true;
    public videoSignal: string;
    public gameName: string;
    public gameDescription: string;

    constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) {}

    ngOnInit() {
        this.videoSignal = this.modalName;
        this.gameName = this.modalGroup + ': A ' + this.description.projectPlatform;
        this.gameDescription = 'My Roles: ' + this.description.projectRole;
    }

    stopVideo() {
        this.videoPlayer = false;
    }
}
