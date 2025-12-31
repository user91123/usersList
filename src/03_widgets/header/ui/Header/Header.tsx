import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";
import { getNavLinkClass } from "@/06_shared/helpers/getNavLinkClass";

const navLinkClass = getNavLinkClass(styles.navLink, styles.active);

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h2 className={styles.logo}>UsersList</h2>
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={navLinkClass}>
          Главная
        </NavLink>
        <NavLink to="/favorites" className={navLinkClass}>
          Избранное
        </NavLink>
      </nav>
    </header>
  );
};
