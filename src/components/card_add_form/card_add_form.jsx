import React, { useRef, useState, memo } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
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
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={`${styles.input} ${styles.borderUp}`}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        ref={themeRef}
        className={`${styles.select} ${styles.border} ${styles.borderUp}`}
        name="theme"
        placeholder="Starter Pokemon"
      >
        <option placeholder="bronze">bronze</option>
        <option placeholder="silver">silver</option>
        <option placeholder="gold">gold</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={`${styles.input} ${styles.border}`}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={`${styles.textarea} ${styles.border}`}
        name="message"
        placeholder="message"
      />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
