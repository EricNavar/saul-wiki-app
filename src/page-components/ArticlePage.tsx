import React from 'react';

import { marked } from 'marked';

import { Header } from '../kit-components/Header';
import { ArticlePageProps } from '../articleTypes';
import { ArticleTitle, Container, StyledImage } from '../styles';

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
    if (!props.subText) {
        console.error('post description is undefined');
        return <div />;
    }
    const postDescription = marked.parse(props.subText) as string;

    return (
        <Container>
            <Header />
            <ArticleTitle>{props.headerText}</ArticleTitle>
            <div style={{ textAlign: 'center' }}>
                <StyledImage src={props.image.fields.file.url} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postDescription }}></div>
        </Container>
    );
};