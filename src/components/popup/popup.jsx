import React from "react";
import styles from "./popup.module.css";

const PopUp = ({ gameResult, gameLost, gameWon, gameRestart }) => {
  return (
    <>
      {gameResult && (
        <section className={gameResult ? styles.pop_up : styles.pop_up__hide}>
          <span className={styles.img_wrap}>
            {gameWon ? (
              <img src="/images/win.png" alt="lost" className={styles.img} />
            ) : (
              <img src="/images/lose.png" alt="lost" className={styles.img} />
            )}
          </span>
          <span className={styles.pop_up__message}>
            {gameWon ? "You saved pokemon!" : "Team Rocket stole pokemon..."}
          </span>
          <button className={styles.pop_up__refresh} onClick={gameRestart}>
            <p>Play Again?</p>
            <img src="/images/again.png" alt="again" className={styles.again} />
            <img src="/images/frame.png" alt="again" className={styles.frame} />
          </button>
        </section>
      )}
    </>
  );
};

export default PopUp;
