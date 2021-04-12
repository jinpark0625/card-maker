import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <>
        <button className={styles.start}>
          <img
            src="/images/pikachu.png"
            alt="pikachu"
            className={styles.start_img}
          />
          gameStart
        </button>
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      </>
    )}
    <img className={styles.logo} src="/images/logo.png" alt="logo" />
  </header>
));

export default Header;
