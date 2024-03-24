import React from 'react';

// import {documentToHtmlString} from '@contentful/rich-text-react-renderer';

import { Header } from '../kit-components/Header';
import { ArticleProps } from '../articleTypes';
import { ArticleTitle, Container, ContentWrapper, Tag } from '../styles';
import { client } from '../client';
import { renderContent } from '../util';

export const ArticleDetailsPage: React.FC<{ id: string }> = (props) => {
  const [article, setArticle] = React.useState<ArticleProps>();

  React.useEffect(() => {
    client.getEntry(props.id)
      .then((response) => {
        setArticle({
          ...response.fields,
          id: response.sys.id,
          tag: response.metadata.tags[0].sys.id,
        } as ArticleProps);
      })
      .catch(console.error);
  }, [props.id]);

  if (!article) {
    return <div>Loading...</div>;
  }
  // const postContent = documentToHtmlString(article.content);

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <ArticleTitle>{article.title}</ArticleTitle>
        <Tag>{article.tag}</Tag>
        {renderContent(article.content)}
      </ContentWrapper>
    </Container>
  );
};