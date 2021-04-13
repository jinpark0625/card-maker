import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth.service";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";
import ImageFileInput from "./components/image_file_input/image_file_input";
import "@fortawesome/fontawesome-free/js/all.js";
import Pokemon from "./service/pokemon";
import * as sound from "./service/sound";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const pokemon = new Pokemon();

const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
      pokemon={pokemon}
      sound={sound}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
