// @flow

import React from 'react';
import styled from 'styled-components';
import FilterLinkContainer from '../../containers/FilterLinkContainer';
import ic_note from './ic_note.png';
import ic_completed from './ic_completed.png';
import { Filters } from '../../types/filter';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding 3px;
  background-color: #FF6978;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  background-size: cover;
`;

const Header = () => (
  <Container>
    <FilterLinkContainer filter={Filters.SHOW_ALL}>
      <Icon src={ic_note} alt={Filters.SHOW_ALL} />
    </FilterLinkContainer>
    <FilterLinkContainer filter={Filters.SHOW_COMPLETED}>
      <Icon src={ic_completed} alt={Filters.SHOW_COMPLETED} />
    </FilterLinkContainer>
  </Container>
);

export default Header;
