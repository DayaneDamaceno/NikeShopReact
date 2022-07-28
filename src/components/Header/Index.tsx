import { FunctionComponent } from "react";
import { Cart, HeaderContainer, Logo } from "./styles";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/CartStore";
import { FiShoppingCart } from "react-icons/fi";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const amountItemsCart = useCartStore((state) => state.cart.length);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoImg} alt="logo" />
      </Link>

      <Cart amount={amountItemsCart} to="/cart">
        <FiShoppingCart color="#000000" size={24} />
      </Cart>
    </HeaderContainer>
  );
};

export default Header;
