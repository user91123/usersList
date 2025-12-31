import { useCreateUser } from "../../model/useCreateUser";
import { UserForm } from "../../../userForm/ui/UserForm";
import styles from "./styles.module.css";

export const CreateUserModal = () => {
  const { isOpen, close, onSubmit } = useCreateUser();

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    close();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <h2>Создать пользователя</h2>
        <UserForm onSubmit={onSubmit} submitText="Создать" />
      </div>
    </div>
  );
};
