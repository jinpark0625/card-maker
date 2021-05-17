import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import GameMain from "./components/game_main/game_main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App({ authService, FileInput, cardRepository, pokemon, sound }) {
  return (
    <div className={styles.main}>
      <BrowserRouter>
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
          <Route path="/game">
            <GameMain pokemon={pokemon} sound={sound} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
