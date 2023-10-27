import styles from "./page.module.css";
import { PageTemplate } from "../../../components/PageTemplate";

export default async function Detail({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user = await res.json();

  return (
    <>
      <PageTemplate text="詳細ページ" />
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.label}>名前</div>
          <div className={styles.data}>{user.username}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>メール</div>
          <div className={styles.data}>{user.email}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>会社名</div>
          <div className={styles.data}>{user.company.name}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>事業</div>
          <div className={styles.data}>{user.company.bs}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.label}>Webサイト</div>
          <div className={styles.data}>{user.website}</div>
        </div>
      </div>
    </>
    // </PageTemplate>
  );
}
