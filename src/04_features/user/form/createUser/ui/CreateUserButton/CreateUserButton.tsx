import { Button } from "@/06_shared/ui/Button";
import { useCreateUser } from "../../model/useCreateUser";
import styles from "./styles.module.css";

interface CreateUserButtonProps {
  text?: string;
}

export const CreateUserButton = ({
  text = "Создать пользователя",
}: CreateUserButtonProps) => {
  const { open } = useCreateUser();

  return (
    <div className={styles.wrapper}>
      <Button className={styles.createButton} onClick={open}>
        {text}
      </Button>
    </div>
  );
};
