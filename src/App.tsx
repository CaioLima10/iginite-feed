import "./App.css";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

import styles from "./app.module.css";
import { Post } from "./components/post";

function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </main>
  );
}

export default App;
