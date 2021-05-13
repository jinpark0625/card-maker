import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      ))}
      {/* <CardAddForm onAdd={addCard} FileInput={FileInput} /> */}
    </section>
  );
};

export default Editor;
