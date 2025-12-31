import { Button } from "@/06_shared/ui/Button";
import { useAppDispatch } from "@/06_shared/libs/storeHooks";
import { openEditUserModal } from "@/05_entities/user/model/userSlice";

interface EditUserButtonProps {
  userId: number;
}

export const EditUserButton = ({ userId }: EditUserButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(openEditUserModal(userId))}>
      Редактировать
    </Button>
  );
};
