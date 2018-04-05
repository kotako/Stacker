// @flow

import type { Action as AddNoteAction } from '../containers/AddNoteFormContainer/actionTypes';

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | AddNoteAction;
