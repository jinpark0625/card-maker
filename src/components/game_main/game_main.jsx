import React, { useState, useEffect } from "react";
import styles from "./game_main.module.css";

import PopUp from "../popup/popup";

import GameHeader from "../game_header/game_header";
import GameField from "../game_field/game_field.jsx";

const GameMain = ({ pokemon }) => {
  const [gameStatus, setGameStatus] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameResult, setGameResult] = useState(false);
  const [gameItemStatus, setGameItemStatus] = useState([
    { id: 1, name: "pokemon" },
    { id: 2, name: "rocket" },
    { id: 3, name: "roy" },
    { id: 4, name: "rosa" },
    { id: 5, name: "cat" },
  ]);
  const [pokeData, setPokeData] = useState(false);
  const [pokeDataLoading, setPokeDataLoading] = useState(false);

  const [time, setTime] = useState(5);
  const [timerOn, setTimerOn] = useState(false);

  const [pokeCount, setPokeCount] = useState(1);
  const [score, setScore] = useState(5);

  const [gameReset, setGameReset] = useState(0);

  useEffect(() => {
    pokemon
      .fetchKantoPokemon() //
      .then((result) => {
        setPokeData(result);
        setPokeDataLoading(true);
      });
  }, [pokemon]);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    timeOut();
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  const gameStart = () => {
    setGameStatus(true);
    setTimerOn(true);
  };

  const timeOut = () => {
    console.log(time);
    if (time === 0) {
      gameLose();
    }
  };

  const gameRestart = () => {
    setGameReset((current) => current + 1);
    setPokeCount(1);
    setTime(5);
    gameStart();
    setGameResult(false);
  };

  const gameStop = () => {
    setTimerOn(false);
  };

  const gameWin = () => {
    setTimerOn(false);
    setGameResult(true);
    setGameWon(true);
    setGameLost(false);
  };

  const gameLose = () => {
    setGameLost(true);
    setTimerOn(false);
    setGameResult(true);
    setGameWon(false);
  };

  const getScore = () => {
    setPokeCount((pokeCount) => pokeCount + 1);
    console.log(pokeCount);
    if (pokeCount === score) {
      gameWin();
    }
  };

  return (
    <>
      {pokeDataLoading ? (
        <>
          <section className={styles.game}>
            <GameHeader
              gameStart={gameStart}
              gameStatus={gameStatus}
              time={time}
              gameStop={gameStop}
            />
            <GameField
              gameStatus={gameStatus}
              pokeData={pokeData}
              gameItemStatus={gameItemStatus}
              getScore={getScore}
              gameReset={gameReset}
              gameLose={gameLose}
            />
          </section>
          {gameResult && (
            <>
              <PopUp
                gameWon={gameWon}
                gameResult={gameResult}
                gameLost={gameLost}
                gameRestart={gameRestart}
              />
            </>
          )}
        </>
      ) : (
        <span className={styles.loading}>
          <img src="./images/loading.gif" alt="" />
        </span>
      )}
    </>
  );
};

export default GameMain;
