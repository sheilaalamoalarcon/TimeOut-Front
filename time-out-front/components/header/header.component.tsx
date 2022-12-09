import { useState } from "react";
import styles from "./header.module.scss";

const userMenu = () => {
  return (
    <div className={styles["user-menu"]}>
      <p>Settings</p>
      <p>Logout</p>
    </div>
  );
};
const menu = () => {
  return (
    <div className={styles["menu"]}>
      <p>Settings</p>
      <p>Logout</p>
    </div>
  );
};

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  return (
    <div className={styles.header}>
      <img
        className={styles["logotype"]}
        src="logotype.svg"
        alt="timeot-logotype"
      />
      <div className={styles["buttons"]}>
        {/* <button type="button" onClick={() => setUserOpen(!isUserOpen)}>
          <img src="/assets/icons/user-icon.svg" alt="user-icon" />
        </button> */}
        <button onClick={() => setMenuOpen(!isMenuOpen)} type="button">
          <img src="/assets/icons/menu-icon.svg" alt="nav-menu" />
        </button>
      </div>
    </div>
  );
}
