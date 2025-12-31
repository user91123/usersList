const STORAGE_KEYS = {
  FAVORITES: "favoritesUsers",
  LOCAL_USERS: "localUsers",
} as const;

export const loadFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const serialized = localStorage.getItem(key);
    if (serialized === null) return defaultValue;
    return JSON.parse(serialized) as T;
  } catch (error) {
    console.error(`Failed to load ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const saveToLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error(`Failed to save ${key} to localStorage:`, error);
  }
};

export const STORAGE_FAVORITES_KEY = STORAGE_KEYS.FAVORITES;
export const STORAGE_LOCAL_USERS_KEY = STORAGE_KEYS.LOCAL_USERS;
