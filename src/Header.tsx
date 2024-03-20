import React from 'react';

import styled from 'styled-components';

const HeaderInner = styled.div`
  padding: 16px;
  border-radius: 6px;
  background-color: rgba(255,255,255,.85);
  text-align: center;
  font-size: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const StyledHeader = styled.header`
  position: sticky;
  padding: 6px;
  top: 0;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader >
      <HeaderInner>
        My Blog
      </HeaderInner>
    </StyledHeader>
  );
};