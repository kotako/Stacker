// @flow

import React from 'react';

import type { Filter } from '../../types/index';

type Props = {
  filter: Filter,
  activeFilter: Filter,
  onClick: Function
};

// activeFilter == filter なら何かする

const FilterLink = ({ filter, activeFilter, onClick }: Props) => (
  <li>
    <a href="#" onClick={ () => onClick(filter.name) }>
      <img src={filter.iconSrc} alt={filter.name}/>
    </a>
  </li>
);

export default FilterLink;
