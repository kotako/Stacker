// @flow

import React from 'react';
import styled from 'styled-components';
import type { Note as _Note } from '../../types';

const Column = styled.li`
  padding: 4px 8px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  vertical-align: middle;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
  word-wrap: break-word;
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
  </Column>
);

export default Note;
