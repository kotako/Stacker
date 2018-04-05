// @flow

import { connect }from 'react-redux';
import { toggleTodo } from './actions';
import NotesList from '../../components/NotesList';

import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
