import styles from "./product.module.css";
import { ReactComponent as CartIcon } from "./../miniCart/cart.svg";

export const Product = ({ product }) => {
  const productDesc = `Add to Cart ${product.name.split(',')[0]} at MRP Rs.${product.price}`;
  return (
    <div className={styles.container}>
      <a className={styles.stripAnchorStyles} href="#">
        <div className={styles.heading}>{product.name}</div>
        <img
          className={styles.image}
          src={product.imageURL}
          alt={`Image related to ${product.name.split(',')[0]}`}
        />
        <p className={styles.description}>{product.description}</p>
        <div className={styles.moreinfo}>
          <p className={styles.price}>MRP Rs.{product.price}</p>
          <button className={styles.buynow} aria-label={productDesc}>
            <CartIcon className={styles.icon} />
          </button>
        </div>
      </a>
    </div>
  );
};
