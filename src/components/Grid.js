import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  width: 800px;
  display: flex;
  border-radius: 20px;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);