import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #FDD5D2;
  padding-bottom: 30px;
`;

export const ArticleContainer = styled.div`
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

export const StyledArticle = styled(Link)`
    border-radius: 8px;
    background-color: rgba(255,255,255,.85);
    padding: 30px;
    margin: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    display: block;
`;

export const StyledImage = styled.img`
    border-radius: 6px;
    width: 400px;
    max-width: 100%;
    margin-bottom: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

export const ArticleTitle = styled.h1`
    font-size: 2rem;
    margin-top: 0;
`;

export const HeaderInner = styled.div`
  padding: 16px;
  border-radius: 6px;
  background-color: rgba(255,255,255,.85);
  text-align: center;
  font-size: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledHeader = styled.header`
  position: sticky;
  padding: 6px;
  top: 0;
`;
