import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Picture } from '../models/picture';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.state';
import * as PictureActions from '../actions/pictures.actions';
import { RemovePicture } from '../actions/pictures.actions';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
    pictures: Observable<Picture[]>;

    constructor(private store: Store<AppState>) {
        this.pictures = this.store.select<any>('picture');
        console.log('this.picture ', this.pictures);
    }

    delTutorial(index) {
        console.log('delTutorial ', index);
        this.store.dispatch(new PictureActions.RemovePicture(index));
    }

    addPicture(name, description) {
        this.store.dispatch(
            new PictureActions.AddPicture({ name: name, description: description }),
        );
    }

    ngOnInit() {}
}
