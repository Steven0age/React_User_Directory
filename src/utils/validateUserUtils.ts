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

export function validateAllFieldsFilledIn(user: UserCardProps) {
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

export function findExistingUserId(
  idToCheck: UserCardProps["userId"],
  users: UserArray
): number {
  const existingUserId = users.findIndex((i) => {
    return i.userId === idToCheck;
  });

  return existingUserId;
}

export function findDuplicateByNameAndBirthdate(
  userToCheck: UserCardProps,
  users: UserArray
): boolean {
  const doesUSerWithSameNameAndBirthdateExist = users.findIndex((i) => {
    return (
      i.userName === userToCheck.userName &&
      i.birthdate === userToCheck.birthdate
    );
  });

  if (doesUSerWithSameNameAndBirthdateExist === -1) {
    return false;
  }

  if (
    users[doesUSerWithSameNameAndBirthdateExist].userId == userToCheck.userId
  ) {
    return false;
  }

  return true;
}
