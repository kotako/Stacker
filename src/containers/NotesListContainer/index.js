// @flow

import { connect } from 'react-redux';
import NotesList from '../../components/NotesList';
import { Filters } from '../../types/filter';
import { completeNote } from './actions';

import type { State, Dispatch, Notes, Filter } from '../../types';

const notesFilter = (notes: Notes, filter: Filter): Notes => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return notes.filter(note => !note.completed);
    case Filters.SHOW_COMPLETED:
      return notes.filter(note => note.completed);
    default:
      return notes;
  }
};

const mapStateToProps = (state: State): Object =>({
  notes: notesFilter(state.NotesList, state.Filter.active)
});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  toggleNote: note => dispatch(completeNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
