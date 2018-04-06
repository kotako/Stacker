// @flow

import type { Note } from '../../types';

export const COMPLETE_NOTE = 'COMPLETE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const Actions = {
  COMPLETE_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
};

export type CompleteNote = {
  type: typeof COMPLETE_NOTE,
  note: Note
};

export type DeleteNote = {
  type: typeof DELETE_NOTE,
  note: Note
};

export type UpdateNote = {
  type: typeof UPDATE_NOTE,
  note: Note
};

export type Action = CompleteNote | DeleteNote | UpdateNote;
