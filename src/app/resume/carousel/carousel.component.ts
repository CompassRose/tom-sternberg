import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdVideoModalComponent } from '../../shared/components/ngb-video-modal/ngb-video-modal.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    providers: [NgbModal],
})
export class CarouselComponent implements OnInit {
    public currdeg1 = 0;
    public aggregate = 0;
    public menuOpen = false;
    public videoPlayer;
    public videoSignal: string;

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        this.videoPlayer = true;
        // this.videoSignal = 'https://www.youtube.com/embed/low8HlogFFQ';
    }

    openModal(e) {
        console.log('openModal ', e);
        const modalRef = this.modalService.open(NgbdVideoModalComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.modalName = e;
        modalRef.componentInstance.modalGroup = 'My Game Name';
    }

    setOriginBack(value) {
        this.currdeg1 -= value;
        this.aggregate -= value;
        if (this.aggregate === -360) {
            this.aggregate = 0;
        }
        this.getCurrentPosition();
    }

    setOriginForward(value) {
        this.currdeg1 += value;
        this.aggregate += value;
        if (this.aggregate === 360) {
            this.aggregate = 0;
        }
        this.getCurrentPosition();
    }

    getCurrentPosition() {
        return 'rotateY(' + this.currdeg1 + 'deg)';
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
