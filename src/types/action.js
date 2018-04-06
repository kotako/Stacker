// @flow

import type { Action as AddNoteAction } from '../containers/AddNoteFormContainer/actionTypes';
import type { Action as NotesListAction } from '../containers/NotesListContainer/actionTypes';
import type { Action as FilterAction } from '../containers/FilterLinkContainer/actionTypes';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | AddNoteAction | NotesListAction | FilterAction;
