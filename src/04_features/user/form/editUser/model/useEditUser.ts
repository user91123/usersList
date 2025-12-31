import { useAppDispatch, useAppSelector } from "@/06_shared/libs/storeHooks";
import {
  updateUser,
  openEditUserModal,
  closeEditUserModal,
} from "@/05_entities/user/model/userSlice";
import type { UserFormValues } from "../../userForm/model/types";
import type { User } from "@/05_entities/user/model/types";

interface UseEditUserReturn {
  isOpen: boolean;
  open: (userId: number) => void;
  close: () => void;
  onSubmit: (data: UserFormValues) => void;
  initialValues: UserFormValues | undefined;
}

export const useEditUser = (allUsers?: User[]): UseEditUserReturn => {
  const dispatch = useAppDispatch();
  const editUserId = useAppSelector((state) => state.user.editUserId);
  const isEditModalOpen = useAppSelector(
    (state) => state.user.isEditUserModalOpen
  );

  const user =
    editUserId && allUsers?.length
      ? allUsers.find((u) => u.id === editUserId)
      : undefined;

  const initialValues: UserFormValues | undefined = user
    ? {
        username: user.username,
        website: user.website,
        city: user.address?.city || "",
      }
    : undefined;

  const open = (userId: number) => dispatch(openEditUserModal(userId));
  const close = () => dispatch(closeEditUserModal());

  const onSubmit = (data: UserFormValues) => {
    if (!user) return;
    dispatch(
      updateUser({
        ...user,
        username: data.username,
        website: data.website,
        address: {
          ...user.address,
          city: data.city,
        },
      })
    );
    close();
  };

  const isOpen = isEditModalOpen && !!editUserId;

  return { isOpen, open, close, onSubmit, initialValues };
};
