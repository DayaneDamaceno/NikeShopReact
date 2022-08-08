import {FunctionComponent} from "react";
import CartListItems from "./components/CartListItems/Index";
import CartResume from "./components/CartResume/Index";

import {CartContainer, CartPageContainer} from "./styles";

interface CartProps {
}

const Cart: FunctionComponent<CartProps> = () => {
	return (
			<CartPageContainer>
				<h1>Meu carrinho</h1>
				<CartContainer>
					<CartListItems/>
					<CartResume/>
				</CartContainer>
			</CartPageContainer>
	);
};

export default Cart;
