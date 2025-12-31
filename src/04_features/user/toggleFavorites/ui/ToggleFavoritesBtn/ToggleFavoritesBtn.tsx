import { Button } from "@/06_shared/ui/Button";
import { useToggleFavorite } from "../../model/useToggleFavorite";

interface ToggleFavoritesBtnProps {
  userId: number;
}

export const ToggleFavoritesBtn = ({ userId }: ToggleFavoritesBtnProps) => {
  const { isFavorite, onToggle } = useToggleFavorite(userId);

  return (
    <Button onClick={onToggle}>
      {isFavorite ? "Убрать из избранного" : "В избранное"}
    </Button>
  );
};
