import React, { useState } from "react";

function Shopping_cart() {
  const [lap_count, set_lap_Count] = useState(0);
  const [smart_count, set_smart_Count] = useState(0);
  const [head_count, set_head_Count] = useState(0);

  function add_laptop() {
    set_lap_Count(lap_count + 1);
  }

  function add_smart_phone() {
    set_smart_Count(smart_count + 1);
  }

  function add_head_phone() {
    set_head_Count(head_count + 1);
  }

  function remove_laptop() {
    if (lap_count > 0) {
      set_lap_Count(lap_count - 1);
    }
  }

  function remove_smartPhone() {
    if (smart_count > 0) {
      set_smart_Count(smart_count - 1);
    }
  }

  function remove_headphone() {
    if (head_count > 0) {
      set_head_Count(head_count - 1);
    }
  }

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h3>List Of Items</h3>
      <ul id="Add-to-cart">
        <li>
          Laptop: {lap_count}
          <button onClick={add_laptop}>Add to cart</button>
          <button onClick={remove_laptop}>Remove from cart</button>
        </li>
        <li>
          SmartPhone: {smart_count}
          <button onClick={add_smart_phone}>Add to cart</button>
          <button onClick={remove_smartPhone}>Remove from cart</button>
        </li>
        <li>
          HeadPhone: {head_count}
          <button onClick={add_head_phone}>Add to cart</button>
          <button onClick={remove_headphone}>Remove from cart</button>
        </li>
      </ul>
    </div>
  );
}

export default Shopping_cart;