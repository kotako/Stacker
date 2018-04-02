import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleTodo } from './actions';

const mapStateToProps = state => ({
  todos: state.TodoList || []
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
