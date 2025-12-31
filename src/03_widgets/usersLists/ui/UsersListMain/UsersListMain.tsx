import styles from "./styles.module.css";
import { useGetUsersQuery } from "@/05_entities/user";
import { UserCard } from "@/05_entities/user";
import { ToggleFavoritesBtn } from "@/04_features/user/toggleFavorites/ui";
import { useAppSelector } from "@/06_shared/libs/storeHooks";
import { makeSelectAllUsers } from "@/05_entities/user/model/selectors";
import { useMemo } from "react";
import { EditUserButton } from "@/04_features/user/form/editUser/ui/EditUserButton/EditUserButton";

export const UsersListMain = () => {
  const { data: apiUsers, isError } = useGetUsersQuery();

  const selectAllUsers = useMemo(
    () => makeSelectAllUsers(apiUsers ?? []),
    [apiUsers]
  );

  const users = useAppSelector(selectAllUsers);

  if (isError) return <div>Ошибка</div>;

  return (
    <div className={styles.usersList}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          actionSlot={
            <>
              <ToggleFavoritesBtn userId={user.id} />
              <EditUserButton userId={user.id} />
            </>
          }
        />
      ))}
    </div>
  );
};
