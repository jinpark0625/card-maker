import React, { useEffect, useState, useRef } from "react";
import styles from "./game_header.module.css";

const GameHeader = ({ gameStart, gameStatus, time, gameStop }) => {
  useEffect(() => {
    if (time === 0) {
      gameStop();
    }
  });
  return (
    <header className={styles.game__header}>
      {/* <div className="Timers">
        <h2>Stopwatch</h2>
        <div id="display">
          <span>{("0" + ((time / 10) % 100)).slice(-1)}</span>
        </div>

        <div id="buttons">
          {!timerOn && time === 5 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume</button>
          )}
        </div>
      </div> */}
      <button className={styles.game__button} onClick={gameStart}>
        <i className="fas fa-play"></i>
      </button>
      <span
        className={gameStatus ? styles.game__timer_show : styles.game__timer}
      >
        {time}
      </span>
      <span
        className={gameStatus ? styles.game__score_show : styles.game__scroe}
      ></span>
    </header>
  );
};

export default GameHeader;
