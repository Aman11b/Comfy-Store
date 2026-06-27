import { type LoaderFunction, redirect, useLoaderData } from "react-router-dom";

import { toast } from "sonner";
import { type ReduxStore } from "../store";
import { customFetch, type OrdersResponse } from "../utils";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast("Please login to continue");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      return { ...response.data };
    } catch (error) {
      console.log(error);
      toast("Failed to fetch orders");
      return null;
    }
  };

function Orders() {
  const { meta, data } = useLoaderData() as OrdersResponse;
  console.log(data);
  return <h1 className="text-4xl">Orders</h1>;
}
export default Orders;
