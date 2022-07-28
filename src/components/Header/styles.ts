import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #f8f8fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
`;

export const Logo = styled.img`
  height: 38px;
`;

interface ICartProps {
  amount: number;
}

export const Cart = styled(Link)<ICartProps>`
  position: relative;
  &::after {
    content: "${(props) => props.amount}";
    padding: 2px 5px;
    font-size: 10px;
    border-radius: 100%;
    color: #000;
    background-color: #29e25d;
    position: absolute;
    top: -6px;
    right: -8px;
  }
`;
