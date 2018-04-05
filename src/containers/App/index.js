// @flow

import React from 'react';
import Header from '../../components/Header';
import AddNoteFormContainer from '../AddNoteFormContainer';
import NotesListContainer from '../NotesListContainer';

const App = () => (
  <div>
    <Header />
    <AddNoteFormContainer />
    <NotesListContainer />
  </div>
);

export default App;
