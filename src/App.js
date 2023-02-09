import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsVisible && <Cart onHideCart={hideCartHandler}></Cart>}
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
