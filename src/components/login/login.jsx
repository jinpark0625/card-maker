import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.id);
    });
  });

  const onLogin = (event) => {
    const text = event.currentTarget.textContent.slice(-6);

    authService //
      .login(text)
      .then((data) => goToMaker(data.user.uid));
  };
  return (
    <section className={styles.login}>
      <figure>
        <img src="/images/main.gif" alt="pokeBg" />
      </figure>
      <section className={styles.login_wrap}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={`${styles.button} ${styles.googleBtn}`}
              onClick={onLogin}
            >
              <i className={`fab fa-google ${styles.loginLogo}`}></i> Login with
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.button} ${styles.githubBtn}`}
              onClick={onLogin}
            >
              <i className={`fab fa-github ${styles.loginLogo}`}></i> Login with
              Github
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
