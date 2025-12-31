import { useAppDispatch, useAppSelector } from "@/06_shared/libs/storeHooks";
import {
  addUser,
  openCreateUserModal,
  closeCreateUserModal,
} from "@/05_entities/user/model/userSlice";
import type { UserFormValues } from "../../userForm/model/types";

interface UseCreateUserReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  onSubmit: (data: UserFormValues) => void;
}

export const useCreateUser = (): UseCreateUserReturn => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.user.isCreateUserModalOpen);

  const open = () => dispatch(openCreateUserModal());
  const close = () => dispatch(closeCreateUserModal());

  const onSubmit = (data: UserFormValues) => {
    dispatch(addUser(data));
    close();
  };

  return { isOpen, open, close, onSubmit };
};
