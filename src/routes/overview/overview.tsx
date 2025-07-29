import "./overview.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useUser } from "../../context/UserContext";

export default function Overview() {
  const { user } = useUser();
  console.log("user=", user);
  return (
    <>
      <h1>Ansicht - Seite</h1>
      <div className="overview">
        <UserCard
          pictureUrl={user[0].pictureUrl}
          userName={user[0].userName}
          birthdate={user[0].birthdate}
          address={user[0].address}
          gender={user[0].gender}
          phone={user[0].phone}
          mail={user[0].mail}
          website={user[0].website}
        />
        {/* <UserCard
          pictureUrl={"src/assets/profile-pictures/male.jpg"}
          userName={"DATA"}
          birthdate={"DATA"}
          address={"DATA"}
          gender={"DATA"}
          phone={"DATA"}
          mail={"DATA"}
          website={"DATA"}
        />
        <UserCard
          pictureUrl={"src/assets/profile-pictures/female.jpg"}
          userName={"DATA"}
          birthdate={"DATA"}
          address={"DATA"}
          gender={"DATA"}
          phone={"DATA"}
          mail={"DATA"}
          website={"DATA"}
        /> */}
      </div>
    </>
  );
}
