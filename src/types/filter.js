// @flow

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

export const Filters = {
  SHOW_ALL,
  SHOW_COMPLETED
};

export type Filter =
  typeof SHOW_ALL |
  typeof SHOW_COMPLETED;
