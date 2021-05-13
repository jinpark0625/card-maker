import React, { memo } from "react";
import styles from "./card.module.css";
import Red from "../icons/red";
import Blue from "../icons/blue";
import Green from "../icons/green";
import Edit from "../icons/edit";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = memo(({ card, showEditor }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={styles.card}>
      <div>
        <Red display={theme} />
        <Blue display={theme} />
        <Green display={theme} />
      </div>
      <div className={styles.first_line}>
        <figure className={styles.img_wrap}>
          <img src={url} alt="profile" className={styles.avatar} />
        </figure>
        <div className={styles.info}>
          <h1 className={styles.name}>
            {name}
            <Edit showEditor={showEditor} />
          </h1>
          <p className={styles.company}>{company}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>
      <div className={styles.second_line}>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

// function getStyles(theme) {
//   switch (theme) {
//     case "bronze":
//       return styles.bronze;
//     case "silver":
//       return styles.silver;
//     case "gold":
//       return styles.gold;
//     default:
//       throw new Error(`unknow theme : ${theme}`);
//   }
// }

export default Card;
