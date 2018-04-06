// @flow
import type { State as NotesListContainerState } from '../containers/NotesListContainer/reducer';
import type { State as FilterState } from '../containers/FilterLinkContainer/reducer';

export type State = {
  NotesList: NotesListContainerState,
  Filter: FilterState
};
