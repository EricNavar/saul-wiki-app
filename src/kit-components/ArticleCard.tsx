import React from 'react';

import { marked } from 'marked';

import { ArticlePageProps } from '../articleTypes';
import { ArticleTitle, StyledArticle, StyledImage } from '../styles';

export const ArticleCard: React.FC<ArticlePageProps> = (props) => {
    if (!props.subText) {
        console.error('post description is undefined');
        return <div />;
    }
    const postDescription = marked.parse(props.subText) as string;

    return (
        <StyledArticle>
            <ArticleTitle>{props.headerText}</ArticleTitle>
            <div style={{ textAlign: 'center' }}>
                <StyledImage src={props.image.fields.file.url} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postDescription }}></div>
        </StyledArticle>
    );
};