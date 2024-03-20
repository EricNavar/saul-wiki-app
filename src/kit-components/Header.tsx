import React from 'react';
import { HeaderInner, HeaderTitle, StyledHeader } from '../styles';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <StyledHeader >
      <HeaderInner>
        <HeaderTitle to='/'>
          Better Call Saul Wiki
        </HeaderTitle>
        &nbsp;
        Tags:
        <Link to='/?tag=seasons'>
          Seasons
        </Link>
        &nbsp;
        <Link to='/?tag=characters'>
          Characters
        </Link>
        &nbsp;
        <Link to='/?tag=locations'>
          Locations
        </Link>
      </HeaderInner>
    </StyledHeader>
  );
};