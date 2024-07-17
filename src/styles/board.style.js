import styled from "styled-components";

export const ChessBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const BoardNumbers = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  padding: 0.51rem;
  color: white;
  background-color: green;
  text-decoration: none;
`;

export const BoardLetters = styled.div`
  margin-left: 2rem;
  display: flex;
  color: white;
  flex-basis: 100%;
  justify-content: center;
`;

export const Letter = styled.div`
  width: 1rem;
  height: 1rem;
  padding: 0.51rem;
  background-color: green;
`;

export const MainContent = styled.div`
  display: block;
  background-color: pink;
`;

export const BoardBlock = styled.div`
  display: flex;
  height: auto;
  border: 1px solid black;
  flew-wrap: wrap;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
`;

export const ItemBlack = styled.div`
  display: block;
  background-color: #000;
  flex-basis: 10%;
  padding: 1rem;
`;

export const ItemWhite = styled.div`
  display: block;
  background-color: #ffffff;
  flex-basis: 10%;
  padding: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  flex-basis: 10%;
`;

export const DetailsBody = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding-top: 32px;
`;

export const Details = styled.details`
  display: inline-block;
  width: 30%;

  & > summary {
    list-style: none;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }
  & > summary::marker {
    display: none;
  }
`;
