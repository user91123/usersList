import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
