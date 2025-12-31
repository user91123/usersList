import styles from "./styles.module.css";

export const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.spinner}></div>
      <p>Загрузка...</p>
    </div>
  );
};
