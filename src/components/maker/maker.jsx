import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "jin",
      company: "google",
      theme: "dark",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: "jin.png",
    },
    {
      id: "2",
      name: "lelel",
      company: "google",
      theme: "light",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: null,
    },
    {
      id: "3",
      name: "safda",
      company: "google",
      theme: "colorful",
      title: "Software Engineer",
      email: "jin@gmail.com",
      message: "slow and steady win the race",
      fileName: "jin",
      fileURL: null,
    },
  ]);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
