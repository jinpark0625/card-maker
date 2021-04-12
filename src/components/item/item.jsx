import React, { useRef, useEffect, useState, memo } from "react";
import styles from "./item.module.css";

const Item = ({ item, pokeData, wrapRef, getScore, gameReset, gameLose }) => {
  const [pokeUrl, setPokeUrl] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [pokeId, setPokeId] = useState(null);
  const [pokeWeight, setPokeWeight] = useState(null);
  const [pokeHeight, setPokeHeight] = useState(null);
  const [rocketurl, setRocketUrl] = useState(null);
  const [pokeStyle, setPokeStyle] = useState(false);

  const pokeMonRef = useRef();
  const rocketRef = useRef();

  const randomId = Math.floor(Math.random() * 151) + 1;
  const randomIdR = Math.floor(Math.random() * 5);

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const randomPlace = (pokeMonRef, rocketRef) => {
    const field = wrapRef.current.getBoundingClientRect();
    const x1 = 0;
    const y1 = 0;
    const x2 = field.width - pokeMonRef.current.width;
    const y2 = field.height - pokeMonRef.current.height;
    const x3 = field.width - rocketRef.current.width;
    const y3 = field.height - rocketRef.current.height;
    for (let i = 0; i < 2; i++) {
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      const z = randomNumber(x1, x3);
      const p = randomNumber(y1, y3);
      pokeMonRef.current.style.left = `${x}px`;
      pokeMonRef.current.style.top = `${y}px`;
      rocketRef.current.style.left = `${z}px`;
      rocketRef.current.style.top = `${p}px`;
    }
    setPokeStyle(false);
  };

  useEffect(() => {
    randomPlace(pokeMonRef, rocketRef);
    setPokeUrl(pokeData[randomId].data.sprites.front_default);
    setPokeName(pokeData[randomId].data.name);
    setPokeId(pokeData[randomId].data.id);
    setPokeWeight(pokeData[randomId].data.weight);
    setPokeHeight(pokeData[randomId].data.height);

    setRocketUrl(`/images/rocket${randomIdR}.png`);
  }, [pokeData, gameReset]);

  const changeImg = (event) => {
    const pokemon = pokeUrl.replace(/[^0-9]/g, "");
    event.target.attributes.src.textContent = "/images/pokeball.png";
    setPokeStyle(true);
    getScore();
  };

  return (
    <>
      {pokeData ? (
        <>
          <img
            src={pokeUrl}
            alt="pokemon"
            className={pokeStyle ? styles.ball : styles.pokemon}
            ref={pokeMonRef}
            onClick={changeImg}
          />
          <img
            ref={rocketRef}
            src={rocketurl}
            alt="roy"
            className={styles.roy}
            onClick={gameLose}
          />
          <div className={styles.list}>
            <h5>Name: {pokeName}</h5>
            <h5>Id: {pokeId}</h5>
            <h5>Height: {pokeHeight}</h5>
            <h5>Weight: {pokeWeight}</h5>
            <img src={pokeUrl} alt="poke" className={styles.list_img} />
          </div>
        </>
      ) : (
        <img src="./images/loading.gif" alt="" />
      )}
    </>
  );
};

export default Item;
