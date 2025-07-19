import "./Root.scss";
import { Outlet } from "react-router-dom";
import Overview from "./overview/overview";
import Create from "./create/create";
import Edit from "./edit/edit";

export { Root, Overview, Create, Edit };

function Root() {
  return (
    <div className="root-layout">
      <aside className="sidebar">
        <h1>My App</h1>
        <nav>
          <br></br>
          <a href="/ansicht">Übersicht</a> <br></br>
          <br></br>
          <a href="/erstellen">Erstellen</a>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
