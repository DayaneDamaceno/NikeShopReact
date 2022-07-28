import styled from "styled-components";

export const ListProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 24px;

  h1 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const ProductItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  font-size: 16px;

  img {
    width: 100%;
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    font-weight: 400;
    text-transform: uppercase;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #87878a;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
  }
`;
export const ButtonAddCart = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #000000;
  border-radius: 3px;
  color: #ffffff;
  border: 1px solid #000000;

  &:hover {
    background: #272727;
  }
`;
