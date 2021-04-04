import styles from "./app.module.css";
import Login from "./components/login/login";

function App() {
  return (
    <section className={styles.main}>
      <Login></Login>
    </section>
  );
}

export default App;
