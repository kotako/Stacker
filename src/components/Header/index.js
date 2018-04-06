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

const Header = () => (
  <Container>
    <FilterLinkContainer iconSrc={ic_note} filter={Filters.SHOW_ALL} />
    <FilterLinkContainer iconSrc={ic_completed} filter={Filters.SHOW_COMPLETED} />
  </Container>
);

export default Header;
