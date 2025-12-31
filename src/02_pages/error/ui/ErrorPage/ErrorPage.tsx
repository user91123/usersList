import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import styles from "./styles.module.css";

export const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "Произошла неизвестная ошибка";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || errorMessage;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className={styles.errorPage}>
      <h1>Ошибка</h1>
      <p>{errorMessage}</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
