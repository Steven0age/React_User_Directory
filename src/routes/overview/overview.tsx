import "./overview.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const { users, deleteUser } = useUser();
  const navigate = useNavigate();

  function editUser(id: string | undefined) {
    navigate(`/bearbeiten/${id}`);
  }
  return (
    <>
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
            deleteHandler={(event: React.MouseEvent) => {
              event.stopPropagation();
              deleteUser(i.userId);
            }}
          />
        ))}
      </div>
    </>
  );
}
