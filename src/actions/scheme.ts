import * as constants from '../constants';

export interface AddColor {
  type: constants.ADD_COLOR,
  color: string
}

export interface RemoveColor {
  type: constants.REMOVE_COLOR,
  index: number
}

export type SchemeAction = AddColor | RemoveColor;

export const addColor = (color: string): AddColor => ({
  type: constants.ADD_COLOR,
  color
});

export const removeColor = (index: number): RemoveColor => ({
  type: constants.REMOVE_COLOR,
  index
});
