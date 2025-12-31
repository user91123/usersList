import { useAppDispatch, useAppSelector } from "@/06_shared/libs/storeHooks";
import { toggleFavorite } from "@/05_entities/user/model/userSlice";

interface UseToggleFavoriteReturn {
  isFavorite: boolean;
  onToggle: () => void;
}

export const useToggleFavorite = (userId: number): UseToggleFavoriteReturn => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector((state) =>
    state.user.favoritesUsers.includes(userId)
  );

  const onToggle = () => {
    dispatch(toggleFavorite(userId));
  };

  return { isFavorite, onToggle };
};
