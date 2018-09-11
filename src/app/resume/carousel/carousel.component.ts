import { Component, ChangeDetectionStrategy, OnInit, Input, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdVideoModalComponent } from '../../shared/components/ngb-video-modal/ngb-video-modal.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    providers: [NgbModal]
})
export class CarouselComponent implements OnChanges {
    @Input()
    historyValues: Observable<any>[];

    public currdeg1 = 0;
    public aggregate = 0;
    public menuOpen = false;
    public videoPlayer = true;
    public projectValues$: any[];
    public IMG_PATH = '../../assets/img/vgames/';

    constructor(private modalService: NgbModal, private http: HttpClient) {}

    ngOnChanges(): void {
        this.projectValues$ = this.historyValues;
    }

    openModal(e) {
        console.log('openModal ', e);
        const modalRef = this.modalService.open(NgbdVideoModalComponent, {
            size: 'lg'
        });
        modalRef.componentInstance.modalName = this.projectValues$[e].video;
        modalRef.componentInstance.modalGroup = this.projectValues$[e].projectName;
        modalRef.componentInstance.description = this.projectValues$[e];
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
}
