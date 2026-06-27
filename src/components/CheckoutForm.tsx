import { type ActionFunction, Form, redirect } from "react-router-dom";
import type { ReduxStore } from "../store";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { toast } from "sonner";

import { customFetch, formatAsDollars, type Checkout } from "../utils";

import { clearCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast("Please fill out all fields");
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast("Please login");
      return redirect("/login");
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const result = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        },
      );
      console.log(result);
      store.dispatch(clearCart());
      toast("Order Placed");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      toast("Order failed");
      return null;
    }
    return null;
  };

export default function CheckoutForm() {
  return (
    <Form method="post" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="First Name" name="name" type="text" />
      <FormInput label="Address" name="address" type="text" />
      <SubmitBtn text="Place your order" className="mt-4" />
    </Form>
  );
}
