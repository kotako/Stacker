// @flow

import React from 'react';
import Note from '../Note';

import type { Note as _Note, Notes } from '../../types';

type Props = {
  notes: Notes,
  toggleNote: Function
};

const NotesList = ({ notes, toggleNote }: Props) => (
  <ul>
    {notes.map((note: _Note) =>
      <Note
        key={note.id}
        note={note}
        onClick={() => toggleNote(note.id)}
      />
    )}
  </ul>
);

export default NotesList;
