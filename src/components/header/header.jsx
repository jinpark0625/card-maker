import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Home from "../icons/home";
import Dex from "../icons/dex";
import Game from "../icons/game";
import Logout from "../icons/logout";

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <ul className={styles.header_wrap}>
        <li className={styles.list}>
          <NavLink to="/game" className={styles.list_link}>
            <Home />
            <span className={styles.list_text}>Home</span>
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/game" className={styles.list_link}>
            <Dex />
            <span className={styles.list_text}>Pokedex</span>
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink to="/game" className={styles.list_link}>
            <Game />
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
));

export default Header;
