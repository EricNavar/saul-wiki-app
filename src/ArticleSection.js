import React from "react";
import {Article} from './Article';
import styled from "styled-components";

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

export function ArticleSection(props) {
    return (
        <ArticleContainer>
            {props.articles.map((article,index) =>
               <Article {...article} key={index} />
            )}
        </ArticleContainer>
    );
}