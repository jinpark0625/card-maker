import React, { useState, useEffect } from "react";
import styles from "./game_main.module.css";

import PopUp from "../popup/popup";
import GameHeader from "../game_header/game_header";
import GameField from "../game_field/game_field.jsx";

const GameMain = ({ pokemon, sound }) => {
  const [gameStatus, setGameStatus] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameResult, setGameResult] = useState(false);
  const [pokeData, setPokeData] = useState(false);
  const [pokeDataLoading, setPokeDataLoading] = useState(false);

  const [time, setTime] = useState(5);
  const [timerOn, setTimerOn] = useState(false);

  const [pokeCount, setPokeCount] = useState(1);
  const [gameReset, setGameReset] = useState(0);

  const gameItemStatus = [
    { id: 1, name: "pokemon" },
    { id: 2, name: "rocket" },
    { id: 3, name: "roy" },
    { id: 4, name: "rosa" },
    { id: 5, name: "cat" },
  ];

  const score = 5;

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

  const stopSound = () => {
    sound.stopPlayLose();
    sound.stopPlayWin();
    sound.stopBackground();
  };

  const gameStart = () => {
    setGameStatus(true);
    setTimerOn(true);
    sound.playBackground();
  };

  const timeOut = () => {
    if (time === 0) {
      gameLose();
    }
  };

  const gameRestart = () => {
    sound.stopPlayLose();
    sound.stopPlayWin();
    sound.stopBackground();
    sound.playBackground();
    setGameReset((current) => current + 1);
    setPokeCount(1);
    setTime(5);
    gameStart();
    setGameResult(false);
  };

  const gameStop = () => {
    setTimerOn(false);
    sound.stopBackground();
  };

  const gameWin = () => {
    sound.stopBackground();
    sound.playWin();
    setTimerOn(false);
    setGameResult(true);
    setGameWon(true);
    setGameLost(false);
  };

  const gameLose = () => {
    sound.stopBackground();
    sound.playLose();
    setGameLost(true);
    setTimerOn(false);
    setGameResult(true);
    setGameWon(false);
  };

  const getScore = () => {
    setPokeCount((pokeCount) => pokeCount + 1);
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
              gameLose={gameLose}
              pokeCount={pokeCount}
              gameStop={gameStop}
              stopSound={stopSound}
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
