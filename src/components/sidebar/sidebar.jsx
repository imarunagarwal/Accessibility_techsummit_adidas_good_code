import { Categories } from '../categories';
import styles from './sidebar.module.css';

export const Sidebar = () => (
  <aside className={styles.container}>
    <Categories />
  </aside>
);
