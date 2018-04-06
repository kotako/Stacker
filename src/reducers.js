// @flow

import { combineReducers } from 'redux';
import NotesList from './containers/NotesListContainer/reducer';
import Filter from './containers/FilterLinkContainer/reducer';

export default combineReducers({
  NotesList,
  Filter
});
