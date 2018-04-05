// @flow
import type { Notes, Action } from '../../types';
import { Actions }  from '../AddNote/actionTypes';

export type State = Notes;

export default (state: State = [], action: Action): State => {
  switch (action.type) {
    case Actions.ADD_NOTE:
      return [ ...state ];
    default:
      return state;
  }
};
