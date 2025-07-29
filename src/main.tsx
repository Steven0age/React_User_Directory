import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.scss";
import App from "./App.tsx";
import { UserProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
