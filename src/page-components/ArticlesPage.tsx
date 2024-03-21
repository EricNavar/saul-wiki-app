import React from 'react';

import { ArticleProps } from '../articleTypes';
import { client } from '../client';

import '../App.css';
import { Header } from '../kit-components/Header';
import { ArticleContainer, Container } from '../styles';
import { ArticleCard } from '../kit-components/ArticleCard';
import { useHistory } from 'react-router';

// i hate my life

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);
  const [searchText, setSearchText] = React.useState<string>('');

  const { push: navigateTo, location: {search} } = useHistory();
  const searchParams = new URLSearchParams(search);
  console.log(searchParams);

  React.useEffect(() => {
    const tag = searchParams.get('tag')

    client.getEntries({
      content_type: 'project',
      'metadata.tags.sys.id[in]': tag ? [tag] : undefined,
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => {
          return {...item.fields, id: item.sys.id} as ArticleProps
        });
        setArticles(articlesFromContentful);
      })
      .catch(console.error);
  }, []);

  // metadata.tags.sys.id[in]=coding
  // metadata.tags.sys.id[in]=tagA,tagB

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
