import { Action } from '@ngrx/store';
import { Picture } from '../family/models/picture';
import * as PictureActions from '../actions/pictures.actions';
// import {ADD_PICTURE, REMOVE_PICTURE, LOAD_PICTURES, LOAD_PICTURES_SUCCESS, LOAD_PICTURES_FAILED} from '../actions/pictures.actions';

export interface PictureState {
  data: Picture[];
  loaded?: boolean;
  loading?: boolean;
}
//
// const initialState1: Picture = {
//   reference: '001',
//   name: 'Tom',
//   image: 'BalboaVolleyball',
//   keyword: 'misc',
//   description: 'Balboa Volleyball',
//   searchable: ['Ben']
// };

// Action passes state and payload
export function reducer(state: Picture, action: PictureActions.Actions) {
  // switch (action.type) {
  //   case PictureActions.LOAD_PICTURES:
  //     // return the initial state(...state) and add new payload to the end
  //     return [...state, action.payload];
  //   case PictureActions.LOAD_PICTURES_SUCCESS:
  //     // return the initial state(...state) and add new payload to the end
  //     return [...state, action.payload];
  //   case PictureActions.LOAD_PICTURES_FAILED:
  //     // return the initial state(...state) and add new payload to the end
  //     return [...state, action.payload];
  //   case PictureActions.ADD_PICTURE:
  //     console.log('reducer ', action.payload);
  //     // return the initial state(...state) and add new payload to the end
  //     return [...state, action.payload];
  //   case PictureActions.REMOVE_PICTURE:
  //     state.splice(action.payload, 1);
  //     return state;
  //   // If nothing has happened return the initial state
  //   default:
  //     return state;
  // }
}
