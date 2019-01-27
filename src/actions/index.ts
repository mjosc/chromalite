import * as constants from '../constants';

export interface AddProject {
  type: constants.ADD_PROJECT
}

export interface RemoveProject {
  type: constants.REMOVE_PROJECT,
  index: number
}

export type ProjectAction = AddProject | RemoveProject;

export const addProject = (): AddProject => ({
  type: constants.ADD_PROJECT
});

export const removeProject = (index: number) => ({
  type: constants.REMOVE_PROJECT,
  index
});