import { Comments } from "./comments";
import styles from "./post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <img src="https://github.com/CaioLima10.png" />
          <div className={styles.authorInfo}>
            <strong>Caio lima</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          className={styles.time}
          title="11 de Maio ás 08:13h"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentario" />

        <button type="submit">Publicar</button>
      </form>
      <Comments />
    </article>
  );
}
