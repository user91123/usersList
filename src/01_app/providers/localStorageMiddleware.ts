import type { Middleware } from "@reduxjs/toolkit";
import { isAction } from "@reduxjs/toolkit";
import {
  saveToLocalStorage,
  STORAGE_FAVORITES_KEY,
  STORAGE_LOCAL_USERS_KEY,
} from "@/06_shared/libs/localStorage";

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (isAction(action) && action.type.startsWith("user/")) {
      const state = store.getState();

      saveToLocalStorage(STORAGE_FAVORITES_KEY, state.user.favoritesUsers);
      saveToLocalStorage(STORAGE_LOCAL_USERS_KEY, state.user.localUsers);
    }

    return result;
  };
