import "./overview.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useUser } from "../../context/UserContext";

export default function Overview() {
  const { users } = useUser();

  return (
    <>
      <h1>Ansicht - Seite</h1>
      <div className="overview">
        {users.map((i) => (
          <UserCard
            userId={i.userId}
            pictureUrl={i.pictureUrl}
            userName={i.userName}
            birthdate={i.birthdate}
            address={i.address}
            gender={i.gender}
            phone={i.phone}
            mail={i.mail}
            website={i.website}
          />
        ))}
      </div>
    </>
  );
}
