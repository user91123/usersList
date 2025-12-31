import styles from "./styles.module.css";
import { UsersListFavorites } from "@/03_widgets/usersLists/ui";
import { SearchFavoritesInput } from "@/04_features/user/toggleFavorites/ui";
import { useState } from "react";
import { CreateUserButton } from "@/04_features/user/form/createUser";

export const FavoritesPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Избранное</h1>
      <CreateUserButton />
      <SearchFavoritesInput onSearch={setSearch} />
      <UsersListFavorites search={search} />
    </div>
  );
};
