import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { Button } from "./ui/button";

export default function CartButton() {
  const numItemInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart,
  );
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center ite relative"
    >
      <Link to="/cart">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemInCart}
        </span>
      </Link>
    </Button>
  );
}
