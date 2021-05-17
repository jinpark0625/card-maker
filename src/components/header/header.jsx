import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Home from "../icons/home";
import Dex from "../icons/dex";
import Game from "../icons/game";
import Logout from "../icons/logout";
import { useState } from "react";

const Header = memo(({ onLogout }) => {
  const [active, setActive] = useState();

  // const activeStyle = () => {
  //   setActive(true);
  // };

  return (
    <header className={styles.header}>
      {onLogout && (
        <ul className={styles.header_wrap}>
          <li className={styles.list}>
            <NavLink to="/maker" className={styles.list_link}>
              <Home active={active} />
              <span
                className={`${styles.list_text} ${
                  active ? styles.active : styles.none
                }`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="/game" className={styles.list_link}>
              <Dex active={active} />
              <span className={styles.list_text}>Pokedex</span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink to="/game" className={styles.list_link}>
              <Game active={active} />
              <span className={styles.list_text}>Game</span>
            </NavLink>
          </li>
          <li className={styles.list}>
            <button className={styles.list_link} onClick={onLogout}>
              <Logout />
              <span className={styles.list_text}>Logout</span>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
});

export default Header;
