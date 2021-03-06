// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Action as _Action} from './action';
import type { State as _State } from './state';
import type { Filter  as _Filter } from './filter';

export type Action = _Action;
export type State = _State;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

export type Note = {
  id: number,
  tag?: Array<string>,
  text: string,
  completed: boolean,
  createdAt: number
};

export type Filter = _Filter;

export type Notes = Array<Note>;
