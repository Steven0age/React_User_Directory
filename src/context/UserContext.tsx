import { createContext, useContext, type ReactNode } from "react";
import type { UserArray, UserCardProps } from "../components/types/user";

type UserContextType = {
  user: UserArray;
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

  const value: UserContextType = {
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUSer must be used within <UserProvider>");
  return ctx;
}
