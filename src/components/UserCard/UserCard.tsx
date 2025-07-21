import Icon from "../Icon/Icon";
import "./UserCard.scss";

export default function UserCard() {
  return (
    <div className="user-card">
      <div className="user-card__image-area">
        <img
          src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
          className="user-card__image"
        ></img>
      </div>
      <div className="user-card__data-area">
        <div className="structured-data__head">
          <h2>NAME DES USERS</h2>
          <Icon icon="website" />
        </div>
        <div className="structured-data__body">
          <div className="structured-data__single-data">
            <Icon icon="birth" />
            <p>DATA</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="address" />
            <p>DATA</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="gender" />
            <p>DATA</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="phone" />
            <p>DATA</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="mail" />
            <p>DATA</p>
          </div>
          <div className="structured-data__single-data">
            <Icon icon="website" />
            <p>DATA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
