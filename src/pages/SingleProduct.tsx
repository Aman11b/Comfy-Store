import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
  type CartItem,
} from "../utils";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

import { type LoaderFunction } from "react-router-dom";

import { SelectProductAmount, SelectProductColor } from "../components";
import { Mode } from "../components/SelectProductAmount";
import { useAppDispatch } from "../hooks";
import { addItem } from "../features/cart/cartSlice";

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`,
  );
  return { ...response.data };
};

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollersAmount = formatAsDollars(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispath = useAppDispatch();
  const cartProduct: CartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const addToCart = () => {
    dispath(addItem(cartProduct));
  };
  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>
      {/* products */}
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-26">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full border-6 border-red-700"
        />
        {/* product info*/}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollersAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>
          {/* colors */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          {/* amuont */}
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          {/* cart byutton */}
          <Button size="lg" className="mt-10" onClick={addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
