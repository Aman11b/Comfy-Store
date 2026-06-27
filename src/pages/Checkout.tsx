import { redirect, type LoaderFunction } from "react-router-dom";
import { CheckoutForm, SectionTitle } from "../components";
import CartTotal from "../components/CartTotal";
import { useAppSelector } from "../hooks";
import type { ReduxStore } from "../store";
import { toast } from "sonner";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<null | Response> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast("Please login to continue");
      return redirect("/login");
    }

    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
}
export default Checkout;
