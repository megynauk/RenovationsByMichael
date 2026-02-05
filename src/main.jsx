import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app/App.jsx";

import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/pages.css";

function Root() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
