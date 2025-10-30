import DefaultListGroup from "./components/DefaultListGroup";
import NewList from "./components/NewList";
import ProfileBar from "./components/ProfileBar";
import TaskListGroup from "./components/TaskListGroup";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ProfileBar />
        <DefaultListGroup />
        <TaskListGroup />
        <NewList />
      </div>
    </div>
  );
}
