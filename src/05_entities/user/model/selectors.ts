import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/01_app/providers/appStore";
import type { User } from "./types";

export const selectFavoriteUsers = (state: RootState): number[] =>
  state.user.favoritesUsers;

export const selectLocalUsers = (state: RootState): User[] =>
  state.user.localUsers;

export const makeSelectAllUsers = (apiUsers: User[] = []) =>
  createSelector([selectLocalUsers], (localUsers): User[] => [
    ...apiUsers,
    ...localUsers,
  ]);
