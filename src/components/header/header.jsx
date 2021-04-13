import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <>
        <NavLink to="/game">
          <button className={styles.start}>
            <img
              src="/images/ash.png"
              alt="pikachu"
              className={styles.start_img}
            />
            <p className={styles.start_text}>Game Start!</p>
          </button>
        </NavLink>
        <button className={styles.logout} onClick={onLogout}>
          <img src="/images/frame.png" alt="frame" className={styles.frame} />
          Logout
        </button>
        <img className={styles.logo} src="/images/pokemon.png" alt="logo" />
      </>
    )}
  </header>
));

export default Header;
