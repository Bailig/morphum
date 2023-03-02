import "./index.css";
import { sendSchema } from "@morphum/messenger";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { schema } from "./schema";
import { defaultTheme, setTheme } from "./theme";

setTheme(defaultTheme);
sendSchema(schema);

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
