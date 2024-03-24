import React from 'react';
import { Form, HeaderInner, HeaderTitle, NavigationContainer, SearchField, StyledHeader,  TagButton, TagsContainer } from '../styles';
import { useHistory } from 'react-router';

export const Header: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>('');

  const history = useHistory();

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const onClickSearch = (e:any) => {
    e.preventDefault();
    searchText && history.push({
      pathname: '/',
      search: `?search=${searchText}`,
    });
  }

  return (
    <StyledHeader >
      <HeaderInner>
        <HeaderTitle to='/'>
          Better Call Saul Wiki
        </HeaderTitle>
        <NavigationContainer>
          <Form onSubmit={onClickSearch}>
            <SearchField value={searchText} onChange={onChangeSearchText} placeholder='Search for article'/>
            <button onClick={onClickSearch}>search</button>
          </Form>
          <TagsContainer>
            Tags:
            <TagButton onClick={()=>history.push({
              pathname: '/',
              search: '?tag=season',
            })}>
              Seasons
            </TagButton>
            &nbsp;
            <TagButton onClick={()=>history.push({
              pathname: '/',
              search: '?tag=character',
            })}>
              Characters
            </TagButton>
            &nbsp;
            <TagButton onClick={()=>history.push({
              pathname: '/',
              search: '?tag=location',
            })}>
              Locations
            </TagButton>
          </TagsContainer>
          </NavigationContainer>
      </HeaderInner>
    </StyledHeader>
  );
};