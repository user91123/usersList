import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";
import type { UserFormValues } from "@/04_features/user/form/userForm/model/types";
import {
  loadFromLocalStorage,
  STORAGE_FAVORITES_KEY,
  STORAGE_LOCAL_USERS_KEY,
} from "@/06_shared/libs/localStorage";

interface UserState {
  favoritesUsers: number[];
  localUsers: User[];
  isCreateUserModalOpen: boolean;
  isEditUserModalOpen: boolean;
  editUserId?: number;
}

const initialState: UserState = {
  favoritesUsers: loadFromLocalStorage<number[]>(STORAGE_FAVORITES_KEY, []),
  localUsers: loadFromLocalStorage<User[]>(STORAGE_LOCAL_USERS_KEY, []),
  isCreateUserModalOpen: false,
  isEditUserModalOpen: false,
  editUserId: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.favoritesUsers.includes(id)) {
        state.favoritesUsers = state.favoritesUsers.filter(
          (favId) => favId !== id
        );
      } else {
        state.favoritesUsers.push(id);
      }
    },
    addUser(state, action: PayloadAction<UserFormValues>) {
      const newUser: User = {
        id: Date.now(),
        username: action.payload.username,
        website: action.payload.website,
        address: { city: action.payload.city },
        email: "не указан",
      };
      state.localUsers.push(newUser);
      state.favoritesUsers.push(newUser.id);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.localUsers.findIndex(
        (u) => u.id === action.payload.id
      );
      if (index !== -1) {
        state.localUsers[index] = action.payload;
      }
    },
    openCreateUserModal(state) {
      state.isCreateUserModalOpen = true;
    },
    closeCreateUserModal(state) {
      state.isCreateUserModalOpen = false;
    },
    openEditUserModal(state, action: PayloadAction<number>) {
      state.isEditUserModalOpen = true;
      state.editUserId = action.payload;
    },
    closeEditUserModal(state) {
      state.isEditUserModalOpen = false;
      state.editUserId = undefined;
    },
  },
});

export const {
  toggleFavorite,
  addUser,
  updateUser,
  openCreateUserModal,
  closeCreateUserModal,
  openEditUserModal,
  closeEditUserModal,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
