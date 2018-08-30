import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'app-family-tree',
    templateUrl: './family-tree.component.html',
    styleUrls: ['./family-tree.component.scss'],
    providers: [PictureService]
})
export class FamilyTreeComponent implements OnInit {
    public treeData;
    public testData: any[] = [];

    constructor(private _pictureService: PictureService) {
        this.getSternbergCollection();
    }

    ngOnInit() {
        console.log('Family Tree Yay!');
    }

    getSternbergCollection(): void {
        this._pictureService.getFamilyContents().subscribe(data => {
            // this.treeData = data.map(d => {
            //     console.log('getFamilyContents ', d);
            //     return d;
            // });
            this.treeData = data.Sternberg;

            this.testData.push(data.Sternberg);

            console.log('getFamilyContents ', this.treeData);
        });
    }
}
