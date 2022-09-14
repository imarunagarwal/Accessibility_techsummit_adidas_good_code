import styles from "./navigation.module.css";

export const Navigation = ({ links }) => {
  const renderedLinks = links.map((link) => (
    <a key={`navigation_${link.id}`} href={link.url} className={styles.link}>
      {link.text}
    </a>
  ));
  return (
    <nav role="navigation" className={styles.container}>{renderedLinks}</nav>
  );
};
