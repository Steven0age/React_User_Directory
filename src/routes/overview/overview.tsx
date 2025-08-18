import "./overview.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Overview() {
  const { users } = useUser();
  const navigate = useNavigate();
  const { id } = useParams();

  function editUser(id: string | undefined) {
    //navigate(`/bearbeiten/`);
    navigate(`/bearbeiten/${id}`);
    console.log("id lautet:", id);
  }
  return (
    <>
      <h1>Ansicht - Seite</h1>
      <div className="overview">
        {users.map((i) => (
          <UserCard
            onClick={() => {
              editUser(i.userId);
            }}
            key={i.userId}
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
