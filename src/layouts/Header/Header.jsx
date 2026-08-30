import styles from "./Header.module.css";
import Menu from "../../components/Menu/Menu";
import LoginButton from "../../components/LoginButton/LoginButton";

const Header = () => {
  const menuLinks = [
    {
      name: "Поиск фильмов",
      url: "#",
      active: true,
    },
    {
      name: "Мои фильмы",
      url: "#",
      count: 2,
      active: false,
    },
  ];
  return (
    <header className={styles.header}>
      <div className={"container" + " " + styles.headerWrapper}>
        <a className={styles.logoLink} href="/">
          <img alt="Логотип" src="/logo.svg" />
        </a>
        <Menu links={menuLinks} />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
