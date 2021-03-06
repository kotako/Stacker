// @flow

import React from 'react';
import styled from 'styled-components';
import Note from '../Note';

import type { Note as _Note, Notes } from '../../types';

const List = styled.ul`
  flex-grow: 1;
  flex-basis: 0;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
  margin: 0;
`;

type Props = {
  notes: Notes,
  toggleNote: Function
};

const NotesList = ({ notes, toggleNote }: Props) => (
  <List>
    {notes.map((note: _Note) =>
      <Note
        key={note.id}
        note={note}
        onClick={toggleNote}
      />
    )}
  </List>
);

export default NotesList;
