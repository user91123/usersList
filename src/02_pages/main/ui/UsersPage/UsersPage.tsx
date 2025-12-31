import styles from "./styles.module.css";
import { UsersListMain } from "@/03_widgets/usersLists/ui";
import { CreateUserButton } from "@/04_features/user/form/createUser";

export const UsersPage = () => {
  return (
    <>
      <h1 className={styles.title}>Список пользователей</h1>
      <CreateUserButton />
      <UsersListMain />
    </>
  );
};
