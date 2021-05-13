import React, { useRef } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <div className={styles.list_wrap}>
        <input
          ref={nameRef}
          className={`${styles.input} ${styles.name}`}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          ref={companyRef}
          className={`${styles.input} ${styles.company}`}
          type="text"
          name="company"
          value={company}
          onChange={onChange}
        />
      </div>
      <div className={styles.list_wrap}>
        <input
          ref={titleRef}
          className={`${styles.input} ${styles.title}`}
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          ref={emailRef}
          className={`${styles.input} ${styles.mail}`}
          type="text"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className={`${styles.list_wrap} ${styles.height}`}>
        <textarea
          ref={messageRef}
          className={`${styles.textarea}`}
          name="message"
          value={message}
          onChange={onChange}
        />
      </div>
      <div className={`${styles.list_wrap} ${styles.btn_wrap}`}>
        <select
          ref={themeRef}
          className={`${styles.select} ${styles.border} ${styles.borderUp}`}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option value="charmander">charmander</option>
          <option value="squirtle">squirtle</option>
          <option value="bulbasaur">bulbasaur</option>
        </select>
        <div className={styles.btns}>
          <FileInput name={fileName} onFileChange={onFileChange} />
          <Button name="Delete" onClick={onSubmit} />
        </div>
      </div>
    </form>
  );
};

export default CardEditForm;
