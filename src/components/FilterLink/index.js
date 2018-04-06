// @flow

import * as React from 'react';
import styled from 'styled-components';

import type { Filter } from '../../types/index';

const Container = styled.div`
  ${props => props.active ? `background-color: #000;`:``}
  &:hover {
    background-color: #d9d;
  }
`;

type Props = {
  active: boolean,
  filter: Filter,
  toggleFilter: Function,
  children?: React.Node
};

const FilterLink = ({ active, filter, toggleFilter, children }: Props) => (
  <Container active={active} onClick={ () => toggleFilter(filter) }>
    {children}
  </Container>
);

export default FilterLink;
