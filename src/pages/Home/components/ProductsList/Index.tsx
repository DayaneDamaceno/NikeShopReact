import { FunctionComponent, useEffect, useState } from "react";
import { getAllProducts } from "../../../../services/ProductService";
import { useCartStore } from "../../../../store/CartStore";
import { IProduct } from "../../../../models/IProduct";
import { formatPrice } from "../../../../helpers/formatPrice";
import {
  ButtonAddCart,
  Detail,
  ListProductsContainer,
  ProductItemContainer,
} from "./styles";
import { useProductStore } from "../../../../store/ProductStore";

interface ProductsListProps {}

const ProductsList: FunctionComponent<ProductsListProps> = () => {
  // const [products, setProducts] = useState<IProduct[]>();
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
