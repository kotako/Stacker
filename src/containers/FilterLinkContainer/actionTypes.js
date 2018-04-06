// @flow

import type { Filter } from '../../types';

export const SET_FILTER = 'SET_FILTER';

export const Actions = {
  SET_FILTER
};

export type Action = SetFilter;

export type SetFilter = {
  type: typeof SET_FILTER,
  filter: Filter
};
