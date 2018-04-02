import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoTextForm from '../../components/TodoTextForm';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextForm);
