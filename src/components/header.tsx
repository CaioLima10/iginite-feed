import styles from "./header.module.css";
import igniteLogo from "../assets/logo-ignite.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logo do ignite" />
    </header>
  );
}
