import React, { useEffect, useState, useCallback } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import Add from "../icons/add";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Maker = ({ authService, FileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history?.location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  // const onLogout = useCallback(() => {
  //   authService.logout();
  // }, [authService]);

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
    setShowAddEdit(false);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
    setShowEdit(false);
  };

  const showAddEditor = () => {
    setShowAddEdit(true);
  };
  const closeAddEditor = (e) => {
    e.preventDefault();
    setShowAddEdit(false);
  };

  const showEditor = (id) => {
    setShowEdit(id);
  };
  const closeEditor = (e) => {
    setShowEdit(false);
  };

  return (
    <section className={styles.maker}>
      <img src="./images/pokeballbg.png" alt="bg" className={styles.bg_img} />
      {/* <Header onLogout={onLogout} /> */}
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          showEdit={showEdit}
          closeEditor={closeEditor}
          showAddEdit={showAddEdit}
          closeAddEditor={closeAddEditor}
        />
        <Preview cards={cards} showEditor={showEditor} />
      </div>
      <button className={styles.addBtn} onClick={showAddEditor}>
        <Add />
        <span className={styles.addText}>Add New Trainer!</span>
      </button>
      <Footer />
    </section>
  );
};

export default Maker;
