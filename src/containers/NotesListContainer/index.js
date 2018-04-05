// @flow

import { connect } from 'react-redux';
import NotesList from '../../components/NotesList';

import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object =>({
  notes: state.NotesList
});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  toggleNote: id => console.log(id)
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
