import type { UserArray } from "../components/types/user";

export function addToLocalStorage(usersToSave: UserArray): void {
  localStorage.setItem("userdirectory", JSON.stringify(usersToSave));
}

export function getFromLocalStorage(): UserArray {
  const usersToLoad = localStorage.getItem("userdirectory");
  if (!usersToLoad) {
    return [];
  }
  const UnJSON = JSON.parse(usersToLoad) as UserArray;
  return UnJSON;
}
