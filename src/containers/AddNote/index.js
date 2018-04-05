// @flow
import { connect } from 'react-redux';
import { addNote } from './actions';
import AddNoteForm from '../../components/AddNoteForm';
import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object => ({});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  addNote: text => dispatch(addNote(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
