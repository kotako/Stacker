// @flow

import { Actions } from './actionTypes';

import type { Filter } from '../../types';
import type { SetFilter } from './actionTypes';

export const setFilter = (filter: Filter): SetFilter => ({
  type: Actions.SET_FILTER,
  filter
});
