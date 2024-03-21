import React from 'react';
import { HeaderInner, HeaderTitle, StyledHeader, Tag, TagsContainer } from '../styles';

export const Header: React.FC = () => {
  return (
    <StyledHeader >
      <HeaderInner>
        <HeaderTitle to='/'>
          Better Call Saul Wiki
        </HeaderTitle>
        <TagsContainer>
          Tags:
          <Tag to='/?tag=seasons'>
            Seasons
          </Tag>
          &nbsp;
          <Tag to='/?tag=characters'>
            Characters
          </Tag>
          &nbsp;
          <Tag to='/?tag=locations'>
            Locations
          </Tag>
        </TagsContainer>
      </HeaderInner>
    </StyledHeader>
  );
};