import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserArray, UserCardProps } from "../components/types/user";
import { getFromLocalStorage } from "../api/api";

type UserContextType = {
  users: UserArray;
  user?: UserArray;
  loadSavedUsers: () => void;
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

  const loadSavedUsers = () => {
    const getData = getFromLocalStorage();
    if (!getData || getData.length == 0) {
      setUsers(user);
      return;
    } else {
      setUsers(getData);
    }
  };

  const value: UserContextType = {
    users,
    loadSavedUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUSer must be used within <UserProvider>");
  return ctx;
}
