import React from 'react';

import styled from 'styled-components';

import { ArticleSection } from './ArticleSection';
import { ArticleViewProps } from './articleTypes';
import { client } from './client';

import './App.css';

const Container = styled.div`
  background-color: #FDD5D2;
  padding-bottom: 30px;
`;

const ArticleContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  @media (max-width: 1080px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 600px) {
    margin-left: 4%;
    margin-right: 4%;
  }
`;

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = React.useState<ArticleViewProps[]>([]);

  React.useEffect(() => {
    client.getEntries({
      content_type: 'project'
    })
      .then((response) => {
        const articlesFromContentful = response.items.map(item => item.fields) as ArticleViewProps[];
        setArticles(articlesFromContentful);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Container>
        <ArticleContainer>
          <ArticleSection articles={articles} />
        </ArticleContainer>
      </Container>
    </div>
  );
};

export { ArticlesPage };
