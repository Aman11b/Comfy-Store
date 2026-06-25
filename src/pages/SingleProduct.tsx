import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from "@/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { type LoaderFunction } from "react-router-dom";

import { SelectProductAmount, SelectProductColor } from "../components";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return null;
};

function SingleProduct() {
  return <h1 className="text-4xl">AbouSingleProduct Page</h1>;
}
export default SingleProduct;
