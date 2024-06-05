import "./App.css";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

import styles from "./app.module.css";
import { Post } from "./components/post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/CaioLima10.png",
      name: "Caio lima",
      role: "future developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { link: "paragraph", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-11 08:13:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/CaioLima10.png",
      name: "Caio lima",
      role: "future developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { link: "paragraph", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-06-03 08:13:30"),
  },
];

function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </main>
  );
}

export default App;
