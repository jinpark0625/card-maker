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
  showAddEdit,
  closeAddEditor,
}) => {
  return (
    <section
      className={`${styles.editor} ${
        showEdit || showAddEdit ? styles.show : styles.hide
      }`}
    >
      {showEdit ? (
        <CardEditForm
          FileInput={FileInput}
          card={cards[String(showEdit)]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          closeEditor={closeEditor}
          showEdit={showEdit}
        />
      ) : (
        <></>
      )}
      {/* {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          closeEditor={closeEditor}
          showEdit={showEdit}
        />
      ))} */}
      <CardAddForm
        onAdd={addCard}
        FileInput={FileInput}
        showAddEdit={showAddEdit}
        closeAddEditor={closeAddEditor}
      />
    </section>
  );
};

export default Editor;
