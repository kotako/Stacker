// @flow

import type { Note } from '../../types';

export const ADD_NOTE = 'ADD_NOTE';

export type AddNote = {
  type: typeof ADD_NOTE,
  note: Note
};

export const Actions = {
  ADD_NOTE
};

export type Action = AddNote;
