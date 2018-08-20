import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
    Pipe,
    PipeTransform,
} from '@angular/core';
import { Picture } from '../models/picture';
import { PictureService } from '../services/picture.service';
import { CustomTooltipComponent } from '../../shared/components/custom-tooltip/custom-tooltip.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from '../../shared/components/ngb-modal/ngb-modal.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/interval';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush, // works with store only
    selector: 'app-pictures',
    templateUrl: './pictures.component.html',
    styleUrls: ['./pictures.component.scss'],
    providers: [
        PictureService,
        CustomTooltipComponent,
        NgbModal,
        NgbActiveModal,
        NgbdModalComponent,
    ],
})
export class PicturesComponent {
    public pictures: Picture[] = [];
    private activeCategory = [];
    pictureCategories = [];
    public activeFilters: string[] = [];
    activePictures: Picture[];

    public showTip = false;
    public toolTitle: string;
    public toolValues: string;
    public tooltipPositionX;
    public tooltipPositionY;

    public observable: Observable<number>;
    public PICTURE_PATH = '../assets/img/pictureCollection/';

    // First char Upper rest Lower
    static toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    constructor(private _pictureService: PictureService, private modalService: NgbModal) {
        this.getPictureCollection();
        this.observable = this.getObservable();
    }

    getObservable() {
        return Observable.interval(1000)
            .take(10)
            .map(v => v * v);
    }

    getPictureCollection(): void {
        this._pictureService.getPictureContents().subscribe(data => {
            this.pictures = data;
            this.activePictures = data.map(d => {
                if (d.image === '') {
                    d.image = '';
                } else {
                    d.image = this.PICTURE_PATH + d.image;
                }
                return d;
            });
            this.pictureCategories[0] = { name: 'All', checked: true };
            this.addFilter('All');
            this.pictureCategories[0].checked = true;
        });
    }

    // Decides to add or remove filters and acts accordingly
    filterTriage(e, cat) {
        if (e.target.checked) {
            this.addFilter(cat);
        } else {
            this.removeFilter(cat);
        }
    }

    // Splices from the filter collection and draws list
    removeFilter(cat) {
        const index = this.activeFilters.indexOf(cat);
        this.activeFilters.splice(index);
        this.drawPictureList();
    }

    // Adds to the filter collection and calls draw
    addFilter(cat) {
        if (cat === 'All') {
            this.resetAll();
            this.activeFilters = [];
            this.activeFilters.push(cat);
        } else {
            if (this.activeFilters[0] === 'All') {
                this.activeFilters = [];
                this.pictureCategories[0].checked = false;
            }
            this.activeFilters.push(cat);
        }
        this.drawPictureList();
    }

    resetAll() {
        this.pictureCategories.forEach(item => {
            item.checked = false;
        });
    }

    // Draws selected picture categories
    drawPictureList() {
        this.activePictures = [];
        this.pictures.forEach((d, i) => {
            if (this.activeFilters[0] === 'All' || !this.activeFilters[0]) {
                this.activePictures.push(d);
            } else {
                this.activeFilters.forEach(c => {
                    if (d.keyword === c) {
                        this.activePictures.push(d);
                    }
                });
            }
            //  console.log('this.activeFilters.forEach ', this.activeFilters);
            this.filterByCategory(d);
        });
    }

    // Sets up category list and capitalizes
    filterByCategory(picture) {
        if (!this.activeCategory.includes(picture.keyword)) {
            this.activeCategory.push(picture.keyword);
            this.pictureCategories.push({
                name: PicturesComponent.toTitleCase(picture.keyword),
                checked: false,
            });
        }
    }

    // custom tooltip called
    onMouseOver(e, pic) {
        this.showTip = true;
        this.toolTitle = pic.name;
        this.toolValues = pic.description;
        this.tooltipPositionX = e.clientX + 80;
        this.tooltipPositionY = e.clientY;
    }

    onMouseLeave() {
        this.showTip = false;
    }

    openModal(e) {
        console.log(e);
        const modalRef = this.modalService.open(NgbdModalComponent, {
            size: 'lg',
            windowClass: 'modal-xxl',
        });
        modalRef.componentInstance.activeIndex = e;
        modalRef.componentInstance.modalGroup = this.activePictures;
    }
}
