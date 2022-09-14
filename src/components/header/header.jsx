import { Logo } from "../logo";
import { MiniCart } from "../miniCart/miniCart";
import { Navigation } from "../navigation/navigation";
import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.container}>
    <Logo />
    <div className={styles.navLinks}>
      <Navigation
        links={[
          { id: 1, text: "Home", url: "/" },
          { id: 2, text: "About", url: "/about" },
          { id: 3, text: "Contact", url: "/contact" },
          { id: 4, text: "Products", url: "/dummy" },
          { id: 5, text: "Cart", url: "/dummy" },
          { id: 6, text: "Hot Deals", url: "/dummy" },
        ]}
      />
      <div className={styles.dropdown} tabIndex="0">
        <button className={styles.dropbtn} tabIndex="-1">Dropdown</button>
        <ul className={styles.dropdownContent} tabIndex="1" role="tablist">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
    </div>
    <MiniCart />
  </div>
);
