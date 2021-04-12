import React from "react";
import styles from "./popup.module.css";

const PopUp = ({ gameResult, gameLost, gameWon, gameRestart }) => {
  console.log(gameWon);
  console.log(gameLost);
  console.log(gameResult);
  return (
    <>
      {gameResult && (
        <section className={gameResult ? styles.pop_up : styles.pop_up__hide}>
          <button className={styles.pop_up__refresh} onClick={gameRestart}>
            <i className="fas fa-redo-alt"></i>
          </button>
          <span className={styles.pop_up__message}>
            {gameWon ? "You Won" : "You Lost"}
          </span>
        </section>
      )}
    </>
  );
};

export default PopUp;
