import { Title } from "./styles";
import ProductsList from "./components/ProductsList/Index";
import { useProductStore } from "../../store/ProductStore";

function Home() {
  const productsLength = useProductStore((state) => state.products.length);
  return (
    <>
      <Title>
        <h1>Camisetas femininas</h1>
        <span>({productsLength})</span>
      </Title>
      <ProductsList />
    </>
  );
}

export default Home;
