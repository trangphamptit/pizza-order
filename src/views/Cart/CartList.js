import React, { Component } from "react";
import CartItem from "./CartItem";
export default function CartList({ value }) {
  return (
    <div className="container-fluid">
      {value.map(item => {
        // console.log("item", item._id);
        // console.log("value", value);
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
