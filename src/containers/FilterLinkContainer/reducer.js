// @flow

import { Actions } from './actionTypes';
import { Filters } from '../../types/filter';

import type { Action, Filter } from '../../types';

export type State = {
  active: Filter
};

const initialState = {
  active: Filters.SHOW_ALL
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Actions.SET_FILTER:
      return { active: action.filter };
    default:
      return state;
  }
};
