import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "jin",
      company: "google",
      theme: "dark",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: "jin.png",
    },
    2: {
      id: "2",
      name: "lelel",
      company: "google",
      theme: "light",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "safda",
      company: "google",
      theme: "colorful",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: null,
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    // 예전의 상태인 cards를 받아서 복사해와서, card안에있는 해당하는 키를 업데이트해준다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
