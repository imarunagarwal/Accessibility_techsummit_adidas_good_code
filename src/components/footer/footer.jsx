import styles from "./footer.module.css";
export const Footer = () => (
  <div className={styles.footerMenu}>
    <ul className={styles.fMenu}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </ul>
  </div>
);
