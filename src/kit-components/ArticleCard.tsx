import React from 'react';

import { ArticleProps } from '../articleTypes';
import { ArticleTitle, StyledArticle, StyledImage } from '../styles';

export const ArticleCard: React.FC<ArticleProps> = (props) => {
    return (
        <StyledArticle to={{
            pathname: `/article/${props.id}`,
            state: {article: props}
        }}>
            <ArticleTitle>{props.title}</ArticleTitle>
            <div style={{ textAlign: 'center' }}>
                <StyledImage src={props.thumbnail.fields.file.url} />
            </div>
            <p style={{textDecoration:'none', color:'black', display: 'inline-flex'}}>{props.description}</p>
        </StyledArticle>
    );
};