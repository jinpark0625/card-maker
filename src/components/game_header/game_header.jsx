import React, { useEffect } from "react";
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
      {gameStatus ? (
        <button className={styles.game__stop} onClick={gameLose}>
          <i className="fas fa-stop" />
        </button>
      ) : (
        <button className={styles.game__button} onClick={gameStart}>
          <i className="fas fa-play" />
        </button>
      )}
      <span
        className={gameStatus ? styles.game__timer_show : styles.game__timer}
      >
        <i className={`fas fa-clock ${styles.time_icon}`}></i>
        time : {time}
      </span>
      {/* <span
        className={gameStatus ? styles.game__score_show : styles.game__score}
      >
        pokemon : {pokeCount - 1}
      </span> */}
    </header>
  );
};

export default GameHeader;
