import styles from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/CaioLima10.png"
          alt=""
        />

        <strong>Caio lima</strong>
        <span className={styles.profession}>Web Developer</span>

        <footer>
          <a className={styles.editProfile} href="#">
            <PencilLine size={24} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
