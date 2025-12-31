import styles from "./styles.module.css";
import type { User } from "../../model/types";

interface UserCardProps {
  user: User;
  actionSlot?: React.ReactNode;
}

export const UserCard = ({ user, actionSlot }: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <div>Имя: {user.username}</div>
      <div>{user.website}</div>
      <div>Город: {user.address?.city || "не указан"}</div>
      {actionSlot && <div>{actionSlot}</div>}
    </div>
  );
};
