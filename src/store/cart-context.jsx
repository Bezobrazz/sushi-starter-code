import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cartContext;

// src/store/Cart-context.jsx
// src/components/Meals/MealItem/MealItem.jsx
