import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [buttonIsEffect, setButtonIsEffect] = useState(false);
  const { items } = cartCtx;
  const numberCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsEffect(true);
    const timer = setTimeout(() => {
      setButtonIsEffect(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonEffect = `${classes.button} ${
    buttonIsEffect ? classes.bump : ""
  }`;
  return (
    <button className={buttonEffect} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Sacola</span>
      <span className={classes.badge}>{numberCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
