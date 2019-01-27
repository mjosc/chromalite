import * as constants from '../constants';
import { Scheme } from '../types';

export interface AddScheme {
  type: constants.ADD_SCHEME,
  scheme: Scheme
}

export interface RemoveScheme {
  type: constants.REMOVE_SCHEME,
  index: number
}

export type ProjectAction = AddScheme | RemoveScheme;

export const addScheme = (scheme: Scheme): AddScheme => ({ 
  type: constants.ADD_SCHEME,
  scheme
});

export const removeScheme = (index: number): RemoveScheme => ({
  type: constants.REMOVE_SCHEME,
  index
});
