import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <h2 className={styles.title}>ユーザ管理</h2>
      </Link>
    </header>
  );
};
