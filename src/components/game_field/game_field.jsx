import React, { useRef, useEffect } from "react";
import styles from "./game_field.module.css";

import Item from "../item/item";
import { useState } from "react";

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
    <section ref={fieldRef} className={styles.items_wrap}>
      <img
        ref={wrapRef}
        src="./images/gameBg.png"
        alt="bg"
        className={styles.bg}
      />
      {gameStatus && (
        <div className={styles.list_wrap}>
          {gameItemStatus.map((item, index) => (
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
      )}
    </section>
  );
};

export default GameField;
