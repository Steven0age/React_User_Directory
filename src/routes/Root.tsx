import "./Root.scss";
import { Outlet } from "react-router-dom";
import Overview from "./overview/overview";
import Create from "./create/create";
import Edit from "./edit/edit";
import NavButton from "../components/NavButton/NavButton";

export { Root, Overview, Create, Edit };
function Root() {
  return (
    <div className="root-layout">
      <aside className="sidebar">
        <div className="sidebar--header">
          <h1>My App</h1>
        </div>
        <nav className="sidebar--nav">
          <NavButton buttonName="Übersicht" buttonTarget="/ansicht" />
          <NavButton buttonName="Erstellen" buttonTarget="/erstellen" />
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
