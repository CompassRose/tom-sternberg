import { Picture } from './picture';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_ITEMS = 'ADD_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const comparator = 'id';

// export function pictures(state: Picture[] = [], action: Action) {
//     console.log('pictures state ', ...state, 'action.type ', action.type);
//     // switch (action.type) {
//     //
//     //   case ADD_ITEMS:
//     //     return action.payload;
//     //
//     //   case CREATE_ITEM:
//     //     return [...state, action.payload];
//     //
//     //   case UPDATE_ITEM:
//     //     return state.map(picture => {
//     //       return picture[comparator] === action.payload[comparator] ? Object.assign({}, picture, action.payload) : picture;
//     //     });
//     //
//     //   case DELETE_ITEM:
//     //     return state.filter(item => {
//     //       return item[comparator] !== action.payload[comparator];
//     //     });
//     //
//     //   default:
//     //     return state;
//     // }
// }
