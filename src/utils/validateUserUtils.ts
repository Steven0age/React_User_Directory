import type { UserCardProps } from "../components/types/user";

const requiredKeys: (keyof UserCardProps)[] = [
  "userName",
  "birthdate",
  "address",
  "gender",
  "phone",
  "mail",
  "website",
];

export function validateUser(user: UserCardProps) {
  const allFieldsFilled = requiredKeys.every((i) => user[i].trim() !== "");
  return allFieldsFilled;
}
