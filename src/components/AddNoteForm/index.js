// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  justify-content: space-around;
  vertical-align: bottom;
  border-top: 1px solid #ddd;
`;

const TextForm = styled.input`
  flex: 1;
  outline: none;
  padding: 0.2em;
  border: 1px solid #ddd;
  border-radius: 2px;
`;

const AddButton = styled.button`
  border-style: none;
  margin-left: 4px;
  outline: none;
  border-radius: 4px;
  color: #fff;
  background-color: #FF6978;
  &:hover {
    background-color: #E8606E;
  }
`;

type Props = {
  addNote: Function
};

const AddNoteForm = ({ addNote }: Props) => {
  let input: ?HTMLInputElement;
  return (
    <Container>
      <form onSubmit={e => {
          e.preventDefault();
          if (input == null || !input.value.trim()) return;
          addNote(input.value);
          input.value = '';
        }}>
        <TextForm type='text' innerRef={node => input = node} />
        <AddButton type='submit'>ADD</AddButton>
      </form>
    </Container>
  );
};

export default AddNoteForm;
