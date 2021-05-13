import React, { useRef, useState, memo } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";

const CardAddForm = memo(
  ({ FileInput, onAdd, showAddEdit, closeAddEditor }) => {
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
      <form
        ref={formRef}
        className={`${styles.form} ${showAddEdit ? styles.show : styles.hide}`}
      >
        <button className={styles.close} onClick={closeAddEditor}>
          <span className={styles.closeA}></span>
          <span className={styles.closeB}></span>
        </button>
        <div className={styles.list_wrap}>
          <input
            ref={nameRef}
            className={`${styles.input} ${styles.name}`}
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            ref={companyRef}
            className={`${styles.input} ${styles.company}`}
            type="text"
            name="company"
            placeholder="company"
          />
        </div>
        <div className={styles.list_wrap}>
          <input
            ref={titleRef}
            className={`${styles.input} ${styles.title}`}
            type="text"
            name="title"
            placeholder="title"
          />
          <input
            ref={emailRef}
            className={`${styles.input} ${styles.mail}`}
            type="text"
            name="email"
            placeholder="email"
          />
        </div>
        <div className={`${styles.list_wrap} ${styles.height}`}>
          <textarea
            ref={messageRef}
            className={`${styles.textarea}`}
            name="message"
            placeholder="message"
          />
        </div>
        <div className={`${styles.list_wrap} ${styles.btn_wrap}`}>
          <select
            ref={themeRef}
            className={`${styles.select} ${styles.border} ${styles.borderUp}`}
            name="theme"
            placeholder="Starter Pokemon"
          >
            <option value="charmander">charmander</option>
            <option value="squirtle">squirtle</option>
            <option value="bulbasaur">bulbasaur</option>
          </select>
          <div className={styles.btns}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
            <Button name="Add" onClick={onSubmit} />
          </div>
        </div>
      </form>
    );
  }
);

export default CardAddForm;
