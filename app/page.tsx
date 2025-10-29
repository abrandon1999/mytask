import ProfileBar from "./components/ProfileBar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ProfileBar />
      </div>
    </div>
  );
}
