import React, { useCallback } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import GameMain from "./components/game_main/game_main";
import Pokedex from "./components/pokedex/pokedex";
import Header from "./components/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App({ authService, FileInput, cardRepository, pokemon, sound }) {
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Header onLogout={onLogout} />
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker
              authService={authService}
              FileInput={FileInput}
              cardRepository={cardRepository}
            />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/game">
            <GameMain pokemon={pokemon} sound={sound} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
