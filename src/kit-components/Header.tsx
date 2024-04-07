import React from 'react';
import { Form, HeaderInner, HeaderTitle, NavigationContainer, SearchField, StyledHeader, TagButton, TagsContainer } from '../styles';
import { useHistory } from 'react-router';
import Logo from '../assets/Better_Call_Saul_logo.png'

type Tag = {
  text: string;
  link: string;
}

const tags: Tag[] = [
  { text: 'Seasons', link: 'season' },
  { text: 'Characters', link: 'character' },
  { text: 'Locations', link: 'location' },
  { text: 'Lore', link: 'lore' },
]

export const Header: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>('');

  const history = useHistory();

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const onClickSearch = (e: any) => {
    e.preventDefault();
    searchText && history.push({
      pathname: '/',
      search: `?search=${searchText}`,
    });
  };

  return (
    <StyledHeader >
      <HeaderInner>
        <HeaderTitle to='/'>
          <img src={Logo} alt='logo' height="80px" />
        </HeaderTitle>
        <NavigationContainer>
          <Form onSubmit={onClickSearch}>
            <SearchField value={searchText} onChange={onChangeSearchText} placeholder='Search for article' />
            <button onClick={onClickSearch}>search</button>
          </Form>
          <TagsContainer>
            Tags:
            {tags.map((tag, index) =>
              <TagButton key={index} onClick={(link) => history.push({
                pathname: '/',
                search: `?tag=${tag.link}`,
              })}>
                {tag.text}
              </TagButton>
            )}
          </TagsContainer>
        </NavigationContainer>
      </HeaderInner>
    </StyledHeader>
  );
};