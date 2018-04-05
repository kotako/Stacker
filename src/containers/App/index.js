// @flow

import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import AddNoteFormContainer from '../AddNoteFormContainer';
import NotesListContainer from '../NotesListContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => (
  <Container>
    <Header />
    <NotesListContainer />
    <AddNoteFormContainer />
  </Container>
);

export default App;
