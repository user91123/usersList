import styles from "./styles.module.css";
import { useGetUsersQuery } from "@/05_entities/user";
import { UserCard } from "@/05_entities/user";
import { ToggleFavoritesBtn } from "@/04_features/user/toggleFavorites/ui";
import { useAppSelector } from "@/06_shared/libs/storeHooks";
import {
  makeSelectAllUsers,
  selectFavoriteUsers,
} from "@/05_entities/user/model/selectors";
import { useMemo } from "react";
import { EditUserButton } from "@/04_features/user/form/editUser/ui/EditUserButton/EditUserButton";
import type { User } from "@/05_entities/user/model/types";

interface UsersListFavoritesProps {
  search?: string;
}

export const UsersListFavorites = ({
  search = "",
}: UsersListFavoritesProps) => {
  const favoritesIds = useAppSelector(selectFavoriteUsers);
  const { data: apiUsers, isError } = useGetUsersQuery();

  const selectAllUsersMemo = useMemo(
    () => makeSelectAllUsers(apiUsers ?? []),
    [apiUsers]
  );

  const allUsers = useAppSelector(selectAllUsersMemo);

  const users = allUsers.filter(
    (user: User) =>
      favoritesIds.includes(user.id) &&
      user.username.toLowerCase().includes(search.toLowerCase())
  );

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
