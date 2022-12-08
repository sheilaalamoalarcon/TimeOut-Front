import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/assets/icons/menu-icon.svg" alt="nav-menu" />
      <p>Time Out</p>
      <img src="/assets/icons/user-icon.svg" alt="user-icon" />
    </div>
  );
}
