import { Fragment } from "react";

import headerImage from "../../assets/things_banner.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ThingsShop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Nosso playground é aqui" />
      </div>
    </Fragment>
  );
};

export default Header;
