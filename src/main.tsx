import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.scss";
import App from "./App.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import ClickSpark from "./components/ClickSpark/ClickSpark.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClickSpark
      sparkColor="#daa520"
      sparkSize={15}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      {
        <UserProvider>
          <App />
        </UserProvider>
      }
    </ClickSpark>
  </StrictMode>
);
