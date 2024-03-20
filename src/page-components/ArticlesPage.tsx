import React from 'react';

import { ArticlePageProps } from '../articleTypes';
import { client } from '../client';

import '../App.css';
import { Header } from '../kit-components/Header';
import { ArticleContainer, Container } from '../styles';
import { ArticleCard } from '../kit-components/ArticleCard';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticlePageProps[]>([]);
  const [searchText, setSearchText] = React.useState<string>('');

  React.useEffect(() => {
    client.getEntries({
      content_type: 'project'
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => item.fields) as ArticlePageProps[];
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
        <input value={searchText} onChange={onChangeSearchText} />
        <button onClick={onClickSearch}>search</button>
        <ArticleContainer>
          {articles ? 
            articles.map((article, index) =>
              <ArticleCard {...article} key={index} />
            )
            : <p>No articles found</p>
          }
        </ArticleContainer>
      </Container>
    </div>
  );
};

export { ArticlesPage };
