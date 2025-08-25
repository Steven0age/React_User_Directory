import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { UserArray, UserCardProps } from "../components/types/user";
import { addToLocalStorage, getFromLocalStorage } from "../api/api";
import { findExistingUser, validateUser } from "../utils/validateUserUtils";

type UserContextType = {
  users: UserArray;
  user?: UserArray;
  saveUser: (newUser: UserCardProps) => void;
  updateUser: (editableUser: UserCardProps) => void;
  deleteUser: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
  const user = [
    {
      pictureUrl: "src/assets/profile-pictures/male.jpg",
      userName: "Stephan",
      birthdate: "01.01.1990",
      address: "Musterstrasse 1",
      gender: "Männlich",
      phone: "0815-123456789",
      mail: "beispiel@mail.de",
      website: "stephan-haak.com",
    },
  ];

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
      return;
    }

    newUser.userId = `${newUser.userName}-${newUser.birthdate}`;

    if (findExistingUser(newUser.userId, users) !== false) {
      alert("Fehler - Nicht möglich! User existiert bereits");
      return;
    }

    switch (newUser.gender) {
      case "Männlich":
        newUser.pictureUrl = "src/assets/profile-pictures/male.jpg";
        break;
      case "Weiblich":
        newUser.pictureUrl = "src/assets/profile-pictures/female.jpg";
        break;
      default:
        newUser.pictureUrl = "src/assets/profile-pictures/diverse.png";
    }

    const newArray = [...users, newUser];
    setUsers(newArray);
  };

  const updateUser = (editableUser: UserCardProps) => {
    if (!validateUser(editableUser)) {
      alert("Fehler - Bitte zuerst alle Felder ausfüllen");
      return;
    }

    editableUser.userId = `${editableUser.userName}-${editableUser.birthdate}`;

    switch (editableUser.gender) {
      case "Männlich":
        editableUser.pictureUrl = "src/assets/profile-pictures/male.jpg";
        break;
      case "Weiblich":
        editableUser.pictureUrl = "src/assets/profile-pictures/female.jpg";
        break;
      default:
        editableUser.pictureUrl = "src/assets/profile-pictures/diverse.png";
    }

    const newArray = [...users];
    const arrayIndex = findExistingUser(editableUser.userId, users);
    if (!arrayIndex) {
      alert("Fehler - Nutzer nicht gefunden");
      return;
    }
    newArray.splice(arrayIndex, 1, editableUser);
    setUsers(newArray);
  };

  const deleteUser = (id: string) => {
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
