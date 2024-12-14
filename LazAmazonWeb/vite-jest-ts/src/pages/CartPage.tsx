import { FunctionComponent } from "react";
import CartItemsList from "../components/Common/CartItemsList";

interface CartPageProps {}

const CartPage: FunctionComponent<CartPageProps> = () => {
  return (
    <>
      <CartItemsList />
    </>
  );
};

export default CartPage;
