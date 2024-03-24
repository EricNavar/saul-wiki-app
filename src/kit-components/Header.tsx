import React from 'react';
import { HeaderInner, HeaderTitle, StyledHeader, Tag, TagsContainer } from '../styles';
import { useHistory } from 'react-router';

export const Header: React.FC = () => {
  const history = useHistory();
  return (
    <StyledHeader >
      <HeaderInner>
        <HeaderTitle to='/'>
          Better Call Saul Wiki
        </HeaderTitle>
        <TagsContainer>
          Tags:
          <Tag onClick={()=>history.push({
            pathname: '/',
            search: '?tag=season',
          })}>
            Seasons
          </Tag>
          &nbsp;
          <Tag onClick={()=>history.push({
            pathname: '/',
            search: '?tag=character',
          })}>
            Characters
          </Tag>
          &nbsp;
          <Tag onClick={()=>history.push({
            pathname: '/',
            search: '?tag=location',
          })}>
            Locations
          </Tag>
        </TagsContainer>
      </HeaderInner>
    </StyledHeader>
  );
};