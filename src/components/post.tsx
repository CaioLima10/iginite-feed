import { ChangeEvent, useState } from "react";
import { Comments } from "./comments";
import styles from "./post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface IPostData {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: { type?: string; content: string; link?: string }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: IPostData) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComments, setNewComments] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateFormateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleChangeNewComment(event: ChangeEvent<HTMLFormElement>) {
    event?.preventDefault();

    const newComments = event.target.comment.value;

    setComments([...comments, newComments]);

    setNewComments("");
  }

  function handleChangeTexterea(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewComments(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleDeleteComment(commentsToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentsToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  }

  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <img src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateFormateToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
          return null;
        })}
      </div>
      <form onSubmit={handleChangeNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newComments}
          onChange={handleChangeTexterea}
          placeholder="Deixe seu comentario"
          required
          onInvalid={handleNewCommentInvalid}
        />

        <button type="submit">Publicar</button>
      </form>
      {comments.map((comment, index) => (
        <Comments
          key={index}
          content={comment}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </article>
  );
}
