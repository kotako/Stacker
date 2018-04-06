// @flow

import React from 'react';
import styled from 'styled-components';
import ic_deleted from './ic_deleted.png';
import ic_restore from './ic_restore.png';

import type { Note as _Note } from '../../types';

const Column = styled.li`
  display: flex;
  padding: 4px 8px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
`;

const Text = styled.p`
  flex: 1;
  padding: 0;
  margin: 0;
  font-size: 0.8em;
  word-wrap: break-word;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  filter: brightness(60%);
  &:hover {
    filter: brightness(0%);
  }
`;

type Props = {
  onClick: Function,
  note: _Note
};

const Note = ({ onClick, note }: Props) => (
  <Column onClick={onClick}>
    <Text>
      {note.text}
    </Text>
    <Icon src={note.completed ? ic_restore : ic_deleted } alt="delete" onClick={() => onClick(note)}/>
  </Column>
);

export default Note;
