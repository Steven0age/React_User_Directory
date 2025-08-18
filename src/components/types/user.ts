export type UserCardProps = {
  pictureUrl: string;
  userName: string;
  birthdate: string;
  address: string;
  gender: string;
  phone: string;
  mail: string;
  website: string;
  userId?: string;
  onClick?: () => void;
};

export type UserArray = UserCardProps[];
