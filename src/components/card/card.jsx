import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="profile" className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
      <img src="images/card.png" alt="profile" className={styles.cardP} />
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "bronze":
      return styles.bronze;
    case "silver":
      return styles.silver;
    case "gold":
      return styles.gold;
    default:
      throw new Error(`unknow theme : ${theme}`);
  }
}

export default Card;
