import "app/styles/index.scss";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { StoreProvider } from "app/providers/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
