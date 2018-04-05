// @flow

import React from 'react';

type Props = {
  addNote: Function
};

const AddNoteForm = ({ addNote }: Props) => {
  let input: ?HTMLInputElement;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (input == null || !input.value.trim()) return;
          addNote(input.value);
          input.value = '';
        }}>
        <input ref={node => input = node} />
        <button type='submit'>add</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
