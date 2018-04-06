// @flow

import * as React from 'react';
import styled from 'styled-components';

import type { Filter } from '../../types/index';

const Container = styled.div`
  flex: 1;
  height: 24px;
  text-align: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  background-size: cover;
  &:hover {
    filter: opacity(90%);
  }
  ${props => props.active
    ? `filter: opacity(100%);`
    : `filter: opacity(60%);`
  }
`;

type Props = {
  active: boolean,
  filter: Filter,
  toggleFilter: Function,
  iconSrc: string
};

const FilterLink = ({ active, filter, toggleFilter, iconSrc }: Props) => (
  <Container active={active} onClick={ () => toggleFilter(filter) }>
    <Icon active={active} src={iconSrc} alt={filter} />
  </Container>
);

export default FilterLink;
