import React from 'react';

import { ArticleProps } from '../articleTypes';
import { client } from '../client';

import '../App.css';
import { Header } from '../kit-components/Header';
import { ArticleContainer, Container } from '../styles';
import { ArticleCard } from '../kit-components/ArticleCard';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);
  const [searchText, setSearchText] = React.useState<string>('');

  React.useEffect(() => {
    client.getEntries({
      content_type: 'project'
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => {
          return {...item.fields, id: item.sys.id} as ArticleProps
        });
        setArticles(articlesFromContentful);
      })
      .catch(console.error);
  }, []);

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const onClickSearch = () => {
    console.log('search');
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
