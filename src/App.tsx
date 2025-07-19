import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Overview, Create, Edit } from "./routes/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "ansicht",
          element: <Overview />,
        },
        {
          path: "erstellen",
          element: <Create />,
        },
        {
          path: "bearbeiten",
          element: <Edit />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
