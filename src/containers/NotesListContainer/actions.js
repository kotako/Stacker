// @flow

import type { Note } from '../../types';
import { Actions } from './actionTypes';
import type { CompleteNote, DeleteNote, UpdateNote } from './actionTypes';

export const completeNote = (note: Note): CompleteNote => ({
  type: Actions.COMPLETE_NOTE,
  note
});

export const deleteNote = (note: Note): DeleteNote => ({
  type: Actions.DELETE_NOTE,
  note
});

export const updateNote = (note: Note): UpdateNote => ({
  type: Actions.UPDATE_NOTE,
  note
});
