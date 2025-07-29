import "./overview.scss";
import UserCard from "../../components/UserCard/UserCard";

export default function Overview() {
  return (
    <>
      <h1>Ansicht - Seite</h1>
      <div className="overview">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}
