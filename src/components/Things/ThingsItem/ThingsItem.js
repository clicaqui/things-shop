import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./ThingsItem.module.css";
import ThingsItemForm from "./ThingsItemForm";

const ThingsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ThingsItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default ThingsItem;
