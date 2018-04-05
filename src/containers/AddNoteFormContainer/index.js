// @flow

import { connect } from 'react-redux';
import moment from 'moment';
import AddNoteForm from '../../components/AddNoteForm';
import { addNote } from './actions';

import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object => ({});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  addNote: (text: string) => dispatch(addNote({
    id : moment().unix(),
    createdAt: moment().unix(),
    completed: false,
    text
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);
