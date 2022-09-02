import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.div`
    border-radius: 8px;
    background-color: pink;
    padding: 30px;
    margin: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const StyledImage = styled.img`
    border-radius: 8px;
    max-width: 400px;
    margin-bottom: 16px;
`;

const ArticleTitle = styled.h1`
    font-size: 2rem;
`

export function Article(props) {
    return (
        <StyledArticle>
            <ArticleTitle>{props.name}</ArticleTitle>
            <StyledImage src={props.featuredImage.fields.file.url} />
            <div>{props.description}</div>
        </StyledArticle>
    );
}