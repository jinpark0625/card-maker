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
      <img
        src="/images/ball.png"
        alt="frame"
        className={`${styles.ball} ${styles.one}`}
      />
      <img
        src="/images/ball.png"
        alt="frame"
        className={`${styles.ball} ${styles.two}`}
      />
      <img
        src="/images/ball.png"
        alt="frame"
        className={`${styles.ball} ${styles.three}`}
      />
      <img
        src="/images/ball.png"
        alt="frame"
        className={`${styles.ball} ${styles.four}`}
      />
      <input
        ref={nameRef}
        className={`${styles.input} ${styles.borderUp}`}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={`${styles.input} ${styles.borderUp}`}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={`${styles.select} ${styles.border} ${styles.borderUp}`}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="bronze">bronze</option>
        <option value="silver">silver</option>
        <option value="gold">gold</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={`${styles.input} ${styles.border}`}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={`${styles.textarea} ${styles.border}`}
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
