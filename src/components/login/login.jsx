import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.login_wrap}>
      <header>Business Crad Maker</header>
      <section>
        <h3>Login</h3>
        <button className={styles.google}>Google</button>
        <button className={styles.github}>Gitgub</button>
      </section>
      <footer>Jin</footer>
    </div>
  );
};
export default Login;
