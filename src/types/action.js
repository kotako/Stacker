// @flow

import type { Action as AddNoteAction } from '../containers/AddNote/actionTypes';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | AddNoteAction;
