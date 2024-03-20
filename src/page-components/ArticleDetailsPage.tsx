import React from 'react';

import { marked } from 'marked';

import { Header } from '../kit-components/Header';
import { ArticleProps } from '../articleTypes';
import { ArticleTitle, Container, TextWrapper, StyledImage } from '../styles';
import { client } from '../client';

export const ArticleDetailsPage: React.FC<{ id: string }> = (props) => {
  const [article, setArticle] = React.useState<ArticleProps>();

  React.useEffect(() => {
    client.getEntry(props.id)
      .then((response) => {
        setArticle(response.fields as ArticleProps);
      })
      .catch(console.error);
  }, [props.id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  const postDescription = marked.parse(article.subText) as string;

  return (
    <Container>
      <Header />
      <TextWrapper>
        <ArticleTitle>{article.headerText}</ArticleTitle>
      </TextWrapper>
      <div style={{ textAlign: 'center' }}>
        <StyledImage src={article.image.fields.file.url} />
      </div>
      <TextWrapper>
      <div dangerouslySetInnerHTML={{ __html: postDescription }}></div>
      </TextWrapper>
    </Container>
  );
};