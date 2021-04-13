import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./game_header.module.css";

const GameHeader = ({
  gameStart,
  gameStatus,
  time,
  gameLose,
  pokeCount,
  gameStop,
  stopSound,
}) => {
  useEffect(() => {
    if (time === 0) {
      gameStop();
    }
  });
  return (
    <header className={styles.game__header}>
      <NavLink to="/maker" onClick={stopSound}>
        <button className={styles.goback}>
          <img
            src="/images/pokedex.png"
            alt="pokedex"
            className={styles.pokedex}
          />
          Go back
        </button>
      </NavLink>
      <>
        {gameStatus ? (
          <button className={styles.game__stop} onClick={gameLose}>
            stop game
            <img
              src="/images/frame.png"
              alt="frame"
              className={styles.stop_frame}
            />
          </button>
        ) : (
          <button className={styles.game__button} onClick={gameStart}>
            <p className={styles.text}>Start game</p>
            <img src="/images/play.png" alt="frame" className={styles.again} />
            <img src="/images/frame.png" alt="frame" className={styles.frame} />
          </button>
        )}
      </>
      <div className={styles.score_wrap}>
        <img
          src="/images/frame.png"
          alt="frame"
          className={gameStatus ? styles.score_frame_show : styles.score_frame}
        />
        <span
          className={gameStatus ? styles.game__timer_show : styles.game__timer}
        >
          time : {time}
        </span>
        <span
          className={gameStatus ? styles.game__score_show : styles.game__score}
        >
          pokemon : {pokeCount - 1}
        </span>
      </div>
    </header>
  );
};

export default GameHeader;
