import { FunctionComponent } from "react";
import { formatPrice } from "../../../../helpers/formatPrice";
import { IProductCart } from "../../../../models/IProductCart";
import { useCartStore } from "../../../../services/store/CartStore";
import { FiX } from "react-icons/fi";
import {
  AmountContainer,
  ButtonChangeAmount,
  ButtonDeleteItem,
  CartListItemsContainer,
  Detail,
  ItemContainer,
  ProductContainer,
} from "./styles";

interface CartListItemsProps {}

const CartListItems: FunctionComponent<CartListItemsProps> = () => {
  const cart = useCartStore((state) => state.cart);
  const updateAmount = useCartStore((state) => state.updateAmount);
  const removeItemInCart = useCartStore((state) => state.removeItemInCart);

  const incrementAmount = (product: IProductCart) => {
    updateAmount(product.Id, product.Amount + 1);
  };
  const decrementAmount = (product: IProductCart) => {
    updateAmount(product.Id, product.Amount - 1);
  };

  return (
    <>
      <CartListItemsContainer>
        {cart?.map((itemCart) => (
          <ItemContainer key={itemCart.Id}>
            <img
              src={`/src/assets/products/product-image-${itemCart.Id}.jpg`}
              alt="produtoImage"
            />
            <ProductContainer>
              <Detail>
                <p>{itemCart.Name}</p>
                <span>{itemCart.Category}</span>
                <h2>{formatPrice(itemCart.TotalPrice)}</h2>
                <AmountContainer>
                  <ButtonChangeAmount onClick={() => decrementAmount(itemCart)}>
                    -
                  </ButtonChangeAmount>
                  <input
                    type="number"
                    size={99}
                    min={0}
                    readOnly
                    value={itemCart.Amount}
                  />
                  <ButtonChangeAmount onClick={() => incrementAmount(itemCart)}>
                    +
                  </ButtonChangeAmount>
                </AmountContainer>
              </Detail>
              <ButtonDeleteItem onClick={() => removeItemInCart(itemCart.Id)}>
                <FiX />
              </ButtonDeleteItem>
            </ProductContainer>
          </ItemContainer>
        ))}
      </CartListItemsContainer>
    </>
  );
};

export default CartListItems;
