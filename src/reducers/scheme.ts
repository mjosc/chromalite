import { SchemeAction } from '../actions/scheme';
import { Scheme } from '../types';
import { ADD_COLOR, REMOVE_COLOR } from '../constants';
import { removeAtIndex } from '../utils';

const initialState: Scheme = {
  id: 0,
  title: '',
  colors: []
}

const scheme = (state: Scheme = initialState, action: SchemeAction): Scheme => {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state, 
        colors: [...state.colors, action.color]
      }
    case REMOVE_COLOR:
      return {
        ...state, 
        colors: removeAtIndex(state.colors, action.index)
      }
    default:
      return state;
  }
}

export default scheme;
