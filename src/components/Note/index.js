// @flow

import React from 'react';
import type { Note as _Note } from '../../types';

type Props = {
  onClick: Function,
  note: _Note
};

const Note = ({ onClick, note }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: note.completed ? 'line-through' : 'none'
    }}>
    {note.text}
  </li>
);

export default Note;
