import { UserForm } from "../../../userForm";
import { useEditUser } from "../../model/useEditUser";
import { useGetUsersQuery } from "@/05_entities/user";
import { makeSelectAllUsers } from "@/05_entities/user/model/selectors";
import { useAppSelector } from "@/06_shared/libs/storeHooks";
import { useMemo } from "react";
import styles from "./styles.module.css";

export const EditUserModal = () => {
  const { data: apiUsers } = useGetUsersQuery();

  const handleOverlayClick = () => {
    close();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const selectAllUsers = useMemo(
    () => makeSelectAllUsers(apiUsers ?? []),
    [apiUsers]
  );
  const allUsers = useAppSelector(selectAllUsers);

  const { isOpen, close, onSubmit, initialValues } = useEditUser(allUsers);

  if (!isOpen || !initialValues) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h2>Редактировать пользователя</h2>
        <UserForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          submitText="Сохранить"
        />
      </div>
    </div>
  );
};
