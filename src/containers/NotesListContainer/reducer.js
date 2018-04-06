// @flow

import { Actions as AddActions } from '../AddNoteFormContainer/actionTypes';
import { Actions } from './actionTypes';
import type { Note, Notes, Action } from '../../types';

export type State = Notes;

// https://github.com/facebook/flow/issues/3461
// jsのオブジェクトが可変なので.map関数とかの中では元のオブジェクトに戻ってしまう

export default (state: State = [], action: Action): State => {
  switch (action.type) {
    case AddActions.ADD_NOTE:
      return [ ...state, action.note ];
    case Actions.COMPLETE_NOTE:
      let targetNoteComplete = { ...action.note, completed: !action.note.completed };
      return state.map(note => (note.id === targetNoteComplete.id) ? targetNoteComplete : note);
    case Actions.DELETE_NOTE:
      let targetNoteDelete = action.note;
      return state.filter(note => note.id !== targetNoteDelete.id);
    default:
      return state;
  }
};
