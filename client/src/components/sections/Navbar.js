import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar__container}>
      <div className={styles.navbar__logo}>
        <h1>RepostMaster</h1>
      </div>
      <div className={styles.navbar__signup__button}>
        <button>Sign Up</button>
      </div>
    </nav>
  );
}
