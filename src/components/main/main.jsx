import { ProductList } from "../productList/productList";
import styles from "./main.module.css";
export const Main = () => (
  <div id="mainContainer" tabIndex='0' className={styles.container}>
    <ProductList />
  </div>
);
