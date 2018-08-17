import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from '../../shared/components/ngb-modal/ngb-modal.component';

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

    constructor(private modalService: NgbModal) {}

    ngOnInit() {
        this.videoPlayer = true;
    }

    openModal(e) {
        console.log('openModal ', e);
        const modalRef = this.modalService.open(NgbdModalComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.index = e;
        modalRef.componentInstance.modalName = e;
        modalRef.componentInstance.modalGroup = e;
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

    stopVideo() {
        this.videoPlayer = false;
    }

    getCurrentPosition() {
        return 'rotateY(' + this.currdeg1 + 'deg)';
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}
