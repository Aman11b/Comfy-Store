import { useAppSelector } from "../hooks";

import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SectionTitle } from "../components";
import CartItemsList from "../components/CartItemsList";
import CartTotal from "../components/CartTotal";
import { Separator } from "../components/ui/separator";

function Cart() {
  // temp
  const user = null;
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart,
  );
  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty cart" />;
  }
  return (
    <div>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Button asChild className="mt-8 w-full">
              <Link to="/checkout">Proceed to checkout</Link>
            </Button>
          ) : (
            <Button asChild className="mt-8 w-full">
              <Link to="/login">Proceed Login</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Cart;
