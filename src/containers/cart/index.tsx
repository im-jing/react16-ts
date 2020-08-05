import React, { useState } from "react";

import CartList from "./cartList";
import useCartData from "./useCartData";

import "./style.css";

interface ICartItem {
  key: number;
  checked: boolean;
  price: number;
  content: string;
  align?: string;
}

const Cart = () => {
  const cartData = useCartData;
  const [sum, setSum] = useState(0);

  const getTotal = function (newTotal: number): void {
    setSum(newTotal);
  };

  console.log("render index");
  return (
    <div className="content">
      <CartList cartData={cartData} sendTotal={getTotal} />
      <div className="total-container">
        Total: ￥<span>{sum}</span>
      </div>
    </div>
  );
};

export default Cart;
