import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import male from "@/assets/profile-pictures/male.jpg";
import female from "@/assets/profile-pictures/female.jpg";
import diverse from "@/assets/profile-pictures/diverse.png";
import type { UserArray, UserCardProps } from "../components/types/user";
import { addToLocalStorage, getFromLocalStorage } from "../api/api";
import {
  findExistingUser,
  validateEMail,
  validateUser,
} from "../utils/validateUserUtils";

type UserContextType = {
  users: UserArray;
  saveUser: (newUser: UserCardProps) => boolean;
  updateUser: (editableUser: UserCardProps) => boolean;
  deleteUser: (id: UserCardProps["userId"]) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<UserArray>(() => {
    const getData = getFromLocalStorage();
    if (!getData || getData.length === 0) {
      return [];
    } else {
      return getData;
    }
  });

  useEffect(() => {
    addToLocalStorage(users);
  }, [users]);

  const saveUser = (newUser: UserCardProps) => {
    if (!validateUser(newUser)) {
      alert("Fehler - Bitte zuerst alle Felder ausfüllen");
      return false;
    }

    if (!validateEMail(newUser)) {
      alert("Fehler - Bitte eine gültige E-Mail Adresse eingeben");
      return false;
    }

    newUser.userId = Math.random().toString().slice(2);

    if (findExistingUser(newUser, users) >= 0) {
      alert("Fehler - Nicht möglich! User existiert bereits");
      return false;
    }

    switch (newUser.gender) {
      case "Männlich":
        newUser.pictureUrl = male;
        break;
      case "Weiblich":
        newUser.pictureUrl = female;
        break;
      default:
        newUser.pictureUrl = diverse;
    }

    const newArray = [...users, newUser];
    setUsers(newArray);
    return true;
  };

  const updateUser = (editableUser: UserCardProps) => {
    if (!validateUser(editableUser)) {
      alert("Fehler - Bitte zuerst alle Felder ausfüllen");
      return false;
    }

    if (!validateEMail(editableUser)) {
      alert("Fehler - Bitte eine gültige E-Mail Adresse eingeben");
      return false;
    }

    if (findExistingUser(editableUser, users) >= 0) {
      alert(
        "Fehler - Nicht möglich! User mit diesem Namen und Geburstdatum existiert bereits"
      );
      return false;
    }

    const arrayIndex = findExistingUser(editableUser.userId, users);
    if (!arrayIndex) {
      alert("Fehler - Nutzer nicht gefunden");
      return false;
    }

    switch (editableUser.gender) {
      case "Männlich":
        editableUser.pictureUrl = male;
        break;
      case "Weiblich":
        editableUser.pictureUrl = female;
        break;
      default:
        editableUser.pictureUrl = diverse;
    }

    const newArray = [...users];
    newArray.splice(arrayIndex, 1, editableUser);
    setUsers(newArray);
    return true;
  };

  const deleteUser = (id: UserCardProps["userId"]) => {
    let index = users.findIndex((i) => {
      return i.userId == id;
    });

    const newArray = [...users];
    newArray.splice(index, 1);
    setUsers(newArray);
  };

  const value: UserContextType = {
    users,
    saveUser,
    updateUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within <UserProvider>");
  return ctx;
}
