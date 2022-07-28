import styled from "styled-components";

export const CartPageContainer = styled.div`
  height: 100%;
  position: relative;
  & > h1 {
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: #000000;
    margin-block: 16px;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;
