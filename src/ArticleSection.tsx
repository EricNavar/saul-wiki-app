import React from 'react';

import styled from 'styled-components';

import { ArticleSectionProps } from './articleTypes';
import { ArticleView } from './ArticleView';
import { Header } from './Header';

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

export const ArticleSection: React.FC<ArticleSectionProps> = (props) => {
  return (
    <>
      <Header />
      <ArticleContainer>
        {props.articles.map((article, index) =>
          <ArticleView {...article} key={index} />
        )}
      </ArticleContainer>
    </>
  );
};
