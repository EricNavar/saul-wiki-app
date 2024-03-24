import React from 'react';

import { ArticleProps } from '../articleTypes';
import { client } from '../client';

import '../App.css';
import { Header } from '../kit-components/Header';
import { ArticleContainer, Container } from '../styles';
import { ArticleCard } from '../kit-components/ArticleCard';
import { useHistory, useLocation } from 'react-router';

// i hate my life

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);
  const [searchText, setSearchText] = React.useState<string>('');

  const { push: navigateTo } = useHistory();
  const location = useLocation();
  
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tag = searchParams.get('tag')
    const search = searchParams.get('search')

    client.getEntries({
      content_type: 'article',
      'metadata.tags.sys.id[in]': tag ? [tag] : undefined,
      query: search ? search : undefined,
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => {
          return {
            ...item.fields,
            id: item.sys.id,
            tag: item.metadata.tags[0].sys.id,
          } as ArticleProps
        });
        const sortedArticles = articlesFromContentful.sort((elem1, elem2) => elem1.tag.localeCompare(elem2.tag));
        setArticles(sortedArticles);
      })
      .catch(console.error);
  }, [location.search]);

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const onClickSearch = (e:any) => {
    e.preventDefault();
    searchText && navigateTo({
      pathname: '/',
      search: `?search=${searchText}`,
    });
  }

  return (
    <div className="App">
      <Container>
        <Header />
        <form onSubmit={onClickSearch}>
          <input value={searchText} onChange={onChangeSearchText} placeholder='Search for article'/>
          <button onClick={onClickSearch}>search</button>
        </form>
        <ArticleContainer>
          {articles ? 
            articles.map((article, index) =>
              <ArticleCard {...article} key={index} />
            )
            : <p>Loading...</p>
          }
        </ArticleContainer>
      </Container>
    </div>
  );
};

export { ArticlesPage };
