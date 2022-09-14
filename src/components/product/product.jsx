import styles from "./product.module.css";
import { ReactComponent as CartIcon } from './../miniCart/cart.svg';

export const Product = ({ product }) => {
  const productDesc = `${product.name} at MRP Rs.${product.price}`
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{product.name}</div>
      <img className={styles.image} src={product.imageURL} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.moreinfo}>
        <p className={styles.price}>MRP Rs.{product.price}</p>
        <button className={styles.buynow} title={productDesc}>
          <CartIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
