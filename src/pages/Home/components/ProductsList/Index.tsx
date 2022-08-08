import { FunctionComponent, useEffect } from "react";
import { formatPrice } from "../../../../helpers/formatPrice";
import { useProductStore } from "../../../../services/store/ProductStore";
import { useCartStore } from "../../../../services/store/CartStore";
import {
  ButtonAddCart,
  Detail,
  ListProductsContainer,
  ProductItemContainer,
} from "./styles";

interface ProductsListProps {}

const ProductsList: FunctionComponent<ProductsListProps> = () => {
  const products = useProductStore((state) => state.products);
  const loadProducts = useProductStore((state) => state.loadProducts);
  const addNewItemInCart = useCartStore((state) => state.addNewItemInCart);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ListProductsContainer>
      {products?.map((product) => (
        <ProductItemContainer key={product.Id}>
          <img
            src={`/src/assets/products/product-image-${product.Id}.jpg`}
            alt="product"
          />
          <Detail>
            <p>{product.Name}</p>
            <span>{product.Category}</span>
            <h2>{formatPrice(product.Price)}</h2>
          </Detail>
          <ButtonAddCart
            onClick={() => addNewItemInCart(product)}
            type="button"
          >
            Adicionar ao carrinho
          </ButtonAddCart>
        </ProductItemContainer>
      ))}
    </ListProductsContainer>
  );
};

export default ProductsList;
