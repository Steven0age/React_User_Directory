import Icon from "../Icon/Icon";
import type { UserCardProps } from "../types/user";
import "./UserCard.scss";

export default function UserCard({
  pictureUrl,
  userName,
  birthdate,
  address,
  gender,
  phone,
  mail,
  website,
  onClick,
}: UserCardProps) {
  return (
    <div className="user-card" onClick={onClick}>
      <div className="user-card__image-area">
        <img src={pictureUrl} className="user-card__image"></img>
      </div>
      <div className="user-card__data-area">
        <div className="structured-data__head">
          <h2>{userName}</h2>
          <Icon icon="delete" />
        </div>
        <div className="structured-data__body">
          <div className="structured-data__single-data">
            <Icon icon="birth" />
            <p>{birthdate}</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="address" />
            <p>{address}</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="gender" />
            <p>{gender}</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="phone" />
            <p>{phone}</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="mail" />
            <p>{mail}</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="website" />
            <p>{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
