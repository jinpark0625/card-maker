import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const createOrUpdateCard = (card) => {
    // 예전의 상태인 cards를 받아서 복사해와서, card안에있는 해당하는 키를 업데이트해준다
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
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
