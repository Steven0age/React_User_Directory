import type { UserArray, UserCardProps } from "../components/types/user";
import validator from "validator";

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

export function validateEMail(user: UserCardProps) {
  const validEMail = validator.isEmail(user["mail"]);
  return validEMail;
}

export function findExistingUser(
  //hier muss auch Name+Birthdate abgeprüft werden
  userId: UserCardProps["userId"],
  users: UserArray
) {
  const existingUserId = users.findIndex((i) => {
    return i.userId === userId;
  });

  return existingUserId >= 0 ? existingUserId : -1;
}
