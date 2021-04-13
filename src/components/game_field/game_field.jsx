import React, { useRef } from "react";
import styles from "./game_field.module.css";

import Item from "../item/item";

const GameField = ({
  gameStatus,
  pokeData,
  gameItemStatus,
  getScore,
  gameReset,
  gameLose,
}) => {
  const wrapRef = useRef();
  const fieldRef = useRef();

  return (
    <section ref={fieldRef} className={styles.game__field}>
      <div className={styles.items_wrap}>
        <img
          ref={wrapRef}
          src="./images/background.png"
          alt="bg"
          className={styles.bg}
        />
        {gameStatus &&
          gameItemStatus.map((item, index) => (
            <Item
              key={index}
              pokeData={pokeData}
              wrapRef={wrapRef}
              item={item}
              getScore={getScore}
              gameReset={gameReset}
              gameLose={gameLose}
            />
          ))}
      </div>
    </section>
  );
};

export default GameField;
