import styles from "./page.module.css";
import Link from "next/link";

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <>
      <h3 className="title">一覧ページ</h3>
      <div className={styles.table}>
        <div className={styles["table--header"]}>
          <p className={styles["table--cel__first"]}>ID</p>
          <p className={styles["table--cel__other"]}>ユーザ名</p>
          <p className={styles["table--cel__other"]}>会社名</p>
        </div>
        <div className={styles["table--body"]}>
          {users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className={styles["table--body__container"]}>
                <p className={styles["table--cel__first"]}>{user.id}</p>
                <p className={styles["table--cel__other"]}>{user.username}</p>
                <p className={styles["table--cel__other"]}>
                  {user.company.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
    // </PageTemplate>
  );
}
