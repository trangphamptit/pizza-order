import React from "react";
import CartItem from "./CartItem";
export default function CartList({ value }) {
  console.log(value);
  return (
    <div className="container-fluid">
      {value.map((item, index) => {
        console.log("item", item);
        return <CartItem key={index} item={item} value={value} />;
      })}
    </div>
  );
}
