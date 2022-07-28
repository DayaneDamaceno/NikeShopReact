import styled from "styled-components";

export const CartResumeContainer = styled.div`
  width: 400px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  right: 0;
  gap: 12px;
  height: auto;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #87878a;

  &::after {
    content: "";
    width: 100%;
    background: #87878a;
    height: 1px;
  }
`;
export const Content = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 16px;
  border: 1px solid #eceef1;
  border-radius: 3px;
`;
export const Title = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonFinish = styled.button`
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
