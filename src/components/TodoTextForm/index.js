import React from 'react';
import PropTypes from 'prop-types';

const TodoTextForm = ({ addTodo }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return;
          addTodo(input.value);
          input.value = '';
        }}>
        <input ref={node => input = node} />
        <button type='submit'>add</button>
      </form>
    </div>
  );
};

TodoTextForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoTextForm;
