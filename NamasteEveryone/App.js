import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", key: 1 },
  "Namaste!"
);
const heading1 = React.createElement(
  "h2",
  { id: "heading1", key: 2 },
  "Everone!"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading1,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
