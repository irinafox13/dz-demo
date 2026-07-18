import styles from "./Menu.module.css";

const Menu = ({ links }) => {
  return (
    <ul className={styles.menu}>
      {links.map((link, index) => (
        <li key={index} className={styles.menuItem + " " + (link.active ? styles.menuItemActive : "")}>
          <a className={styles.menuLink} href={link.url}>
            {link.name}
            {link.count && (
              <span className={styles.menuCount}>{link.count}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
