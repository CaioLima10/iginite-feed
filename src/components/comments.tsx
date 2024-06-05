import styles from "./comments.module.css";

import { ThumbsUp, Trash } from "phosphor-react";

interface CommentsProps {
  content: string;
  handleDeleteComment: (content: string) => void;
}

export function Comments({ content, handleDeleteComment }: CommentsProps) {
  return (
    <section className={styles.comments}>
      <div className={styles.containerComments}>
        <img src="https://github.com/CaioLima10.png" />
        <div className={styles.commentsBox}>
          <header>
            <div className={styles.contentHeader}>
              <strong>Caio lima</strong>
              <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1hr atrás
              </time>
            </div>
            <button onClick={() => handleDeleteComment(content)}>
              <Trash size={24} className={styles.iconTrash} />
            </button>
          </header>
          <div>
            <p>{content}</p>
          </div>
        </div>
      </div>
      <footer>
        <button>
          <ThumbsUp size={20} /> Aplaudir <span>03</span>
        </button>
      </footer>
    </section>
  );
}
