import React from 'react';

import { ArticleProps } from '../articleTypes';
import { ArticleTitle, StyledArticle, StyledImage } from '../styles';

export const ArticleCard: React.FC<ArticleProps> = (props) => {
    if (!props.subText) {
        console.error('post description is undefined');
        return <div />;
    }

    return (
        <StyledArticle to={{
            pathname: `/article/${props.id}`,
            state: {article: props}
        }}>
            <ArticleTitle>{props.headerText}</ArticleTitle>
            <div style={{ textAlign: 'center' }}>
                <StyledImage src={props.image.fields.file.url} />
            </div>
        </StyledArticle>
    );
};