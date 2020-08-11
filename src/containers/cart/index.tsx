import React from "react";

import CartList from "./cartList";
import useCartData from "./useCartData";
import useTotal from "./useTotal";

import "./style.css";

const Cart = () => {
  const cartData = useCartData;
  const { sum, getTotal } = useTotal();

  return (
    <div className="content">
      <CartList cartData={cartData} sendTotal={getTotal} />
      <div aria-live="polite" className="total-container">
        Total: ￥<span>{sum}</span>
      </div>
    </div>
  );
};

export default Cart;
