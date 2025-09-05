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
  userIdentifier: string | undefined | UserCardProps,
  users: UserArray
): number {
  let existingUserId = -1;

  if (typeof userIdentifier === "string") {
    existingUserId = users.findIndex((i) => {
      return i.userId === userIdentifier;
    });
  }

  if (typeof userIdentifier === "object") {
    existingUserId = users.findIndex((i) => {
      return (
        i.userName === userIdentifier.userName &&
        i.birthdate === userIdentifier.birthdate
      );
    });
  }
  return existingUserId;
}
