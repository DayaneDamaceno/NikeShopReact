import styled from "styled-components";

export const CartListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const ItemContainer = styled.div`
  border: 1px solid #cccfd2;
  display: flex;
  background: #ffffff;
  img {
    width: 40%;
    object-fit: cover;
    max-width: 150px;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 18px;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
  p {
    font-weight: 400;
  }
  span {
    font-weight: 700;
    color: #87878a;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
  }
`;
export const AmountContainer = styled.div`
  input {
    width: 40px;
    text-align: center;
  }
`;

export const ButtonChangeAmount = styled.button`
  width: 24px;
  height: 24px;
  background: #f1f1f1;
`;
export const ButtonDeleteItem = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
