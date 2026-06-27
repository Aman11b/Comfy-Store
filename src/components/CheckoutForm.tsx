import { type ActionFunction, Form, redirect } from "react-router-dom";
import type { ReduxStore } from "../store";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null> => {
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
