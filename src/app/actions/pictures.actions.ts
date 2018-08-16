import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Picture } from '../models/picture';

export const LOAD_PICTURES = '[PICTURE] Load';
export const LOAD_PICTURES_SUCCESS = '[PICTURE] Load Successful';
export const LOAD_PICTURES_FAILED = '[PICTURE] Load Failed';
export const ADD_PICTURE = '[PICTURE] Add';
export const REMOVE_PICTURE = '[PICTURE] Remove';

export class LoadPicture implements Action {
    readonly type = LOAD_PICTURES;
    constructor(public payload: any) {}
}

export class LoadPictureSuccess implements Action {
    readonly type = LOAD_PICTURES_SUCCESS;
    constructor(public payload: Picture) {}
}

export class LoadPictureFailed implements Action {
    readonly type = LOAD_PICTURES_FAILED;
    constructor(public payload: any) {}
}

export class AddPicture implements Action {
    readonly type = ADD_PICTURE;

    constructor(public payload: Picture) {}
}

export class RemovePicture implements Action {
    readonly type = REMOVE_PICTURE;

    constructor(public payload: number) {}
}

export type Actions =
    | LoadPicture
    | LoadPictureSuccess
    | LoadPictureFailed
    | AddPicture
    | RemovePicture;
