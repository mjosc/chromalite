import { ProjectAction } from '../actions/project';
import { Project, Scheme } from '../types';
import { ADD_SCHEME, REMOVE_SCHEME } from '../constants';

const initialState: Project = {
  id: 0,
  title: '',
  schemes: []
}

const project = (state: Project = initialState, action: ProjectAction): Project => {
  switch (action.type) {
    case ADD_SCHEME:
      return { 
        ...state,
        schemes: state.schemes.map(scheme => ({...scheme })) // TODO: Add scheme
      }
    case REMOVE_SCHEME:
      return { 
        ...state,
        schemes: state.schemes.reduce<Scheme[]>((accumulator, scheme, index) => {
          if (index !== action.index) {
            accumulator.push({ ...scheme });
          }
          return accumulator;
        }, [])
      }
    default:
      return state
  }
}

export default project;
