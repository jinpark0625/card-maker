import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({
  FileInput,
  cards,
  addCard,
  updateCard,
  deleteCard,
  showEdit,
  closeEditor,
}) => {
  return (
    <section
      className={`${styles.editor} ${showEdit ? styles.show : styles.hide}`}
    >
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          closeEditor={closeEditor}
        />
      ))}
      {/* <CardAddForm onAdd={addCard} FileInput={FileInput} /> */}
    </section>
  );
};

export default Editor;
