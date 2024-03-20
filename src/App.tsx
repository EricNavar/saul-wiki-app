import React from 'react';

import styled from 'styled-components';

import { ArticleSection } from './ArticleSection';
import { ArticleViewProps } from './articleTypes';
import { client } from './client';
import { Header } from './Header';

import './App.css';


const Container = styled.div`
  background-color: #FDD5D2;
  padding-bottom: 30px;
`;

const App: React.FC = () => {
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
        <Header />
        <ArticleSection articles={articles} />
      </Container>
    </div>
  );
};

export default App;
