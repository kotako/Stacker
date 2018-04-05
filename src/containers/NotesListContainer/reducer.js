// @flow

import { Actions } from '../AddNoteFormContainer/actionTypes';
import type { Notes, Action } from '../../types';

export type State = Notes;

export default (state: State = [], action: Action): State => {
  switch (action.type) {
    case Actions.ADD_NOTE:
      return [ ...state, action.note ];
    default:
      return state;
  }
};
