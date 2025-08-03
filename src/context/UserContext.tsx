import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { UserArray, UserCardProps } from "../components/types/user";
import { addToLocalStorage, getFromLocalStorage } from "../api/api";

type UserContextType = {
  users: UserArray;
  user?: UserArray;
  loadSavedUsers: () => void;
  saveUsers: (newUser: UserCardProps) => void;
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
  const [users, setUsers] = useState<UserArray>([]);

  useEffect(() => {
    addToLocalStorage(users);
  }, [users]);

  const loadSavedUsers = () => {
    const getData = getFromLocalStorage();
    if (!getData || getData.length == 0) {
      return;
    } else {
      setUsers(getData);
    }
  };

  const saveUsers = (newUser: UserCardProps) => {
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

    newUser.userId = `${newUser.userName}-${newUser.birthdate}`;

    const newArray = [...users, newUser];
    setUsers(newArray);
  };

  const value: UserContextType = {
    users,
    loadSavedUsers,
    saveUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUSer must be used within <UserProvider>");
  return ctx;
}
