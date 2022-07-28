import { FunctionComponent, useEffect, useState } from "react";
import { formatPrice } from "../../../../helpers/formatPrice";
import { useCartStore } from "../../../../store/CartStore";

import {
  ButtonFinish,
  Content,
  Item,
  ListItems,
  CartResumeContainer,
  Title,
  Total,
} from "./styles";

interface CartResumeProps {}

const CartResume: FunctionComponent<CartResumeProps> = () => {
  const cart = useCartStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cart]);

  const getTotalPrice = () => {
    let totalPrice = cart.reduce(function (sum, item) {
      return sum + item.TotalPrice;
    }, 0);

    return formatPrice(totalPrice);
  };

  return (
    <>
      <CartResumeContainer>
        <Content>
          <Title>Resumo do Pedido</Title>
          <ListItems>
            <Item>
              <p>{cart.length} produtos</p>
              <p>{totalPrice}</p>
            </Item>
            <Item>
              <p>Entrega</p>
              <p>Gratis</p>
            </Item>
          </ListItems>
          <Total>
            <p>Total</p>
            <p>{totalPrice}</p>
          </Total>
        </Content>
        <ButtonFinish>Finalizar Pedido</ButtonFinish>
      </CartResumeContainer>
    </>
  );
};

export default CartResume;
