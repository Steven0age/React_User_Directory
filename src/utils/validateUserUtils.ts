import type { UserArray, UserCardProps } from "../components/types/user";

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
  const allFieldsFilled = requiredKeys.every((i) => {
    if (typeof user[i] !== "string") {
      return;
    }

    return user[i].trim() !== "";
  });

  return allFieldsFilled;
}

export function findExistingUser(
  userId: UserCardProps["userId"],
  users: UserArray
) {
  const existingUserId = users.findIndex((i) => {
    return i.userId === userId;
  });

  return existingUserId >= 0 ? existingUserId : false;
}
