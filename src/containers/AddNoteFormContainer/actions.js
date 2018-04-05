// @flow

import { Actions } from './actionTypes';
import type { AddNote } from './actionTypes';
import type { Note } from '../../types';

export const addNote = (note: Note): AddNote => ({
  type: Actions.ADD_NOTE,
  note
});
