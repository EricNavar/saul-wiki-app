import React from 'react';
import {Header} from './Header';
import {ArticleSection } from './ArticleSection';
import './App.css';
import styled from 'styled-components';
import {client} from './client';

const Container = styled.div`
  background-color: #FDD5D2;
  padding-bottom: 30px;
`;

function App() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
      client.getEntries()
          .then((response) => {
              const articlesFromContentful = response.items.map(item => item.fields);
              setArticles(articlesFromContentful);
          })
          .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Container>
        <Header />
        <ArticleSection articles={articles}/>
      </Container>
    </div>
  );
}

export default App;
