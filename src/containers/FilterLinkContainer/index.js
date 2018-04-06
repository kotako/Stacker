// @flow

import { connect } from 'react-redux';
import { setFilter } from './actions';
import FilterLink from '../../components/FilterLink/index';

import type { State, Dispatch, Filter } from '../../types';

type Props = {
  filter: Filter,
  iconSrc: string
};

const mapStateToProps = (state: State, ownProps: Props): Object => ({
  active: state.Filter.active === ownProps.filter,
  iconSrc: ownProps.iconSrc
});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  toggleFilter: (filter: Filter) => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
