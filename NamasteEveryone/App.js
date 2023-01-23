import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.jpg";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", key: 1 },
//   "Namaste!"
// );
// const heading1 = React.createElement(
//   "h2",
//   { id: "heading1", key: 2 },
//   "Everone!"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading1,
// ]);

// const header = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", { key: 1 }, "Hello"),
//   React.createElement("h2", { key: 2 }, "Namaste"),
//   React.createElement("h3", { key: 3 }, "Everyone"),
// ]);

const bd = (
  <div>
    <h2> Namaste </h2>
    <h3> Everyone </h3>
  </div>
);

const SearchBar = ({ keyword, onChange }) => {
  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyle}
      key="search-bar"
      value={keyword}
      placeholder={"search news"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </header>
      <div>
        <h1> Hello </h1>
        {bd}
      </div>
      {/* Hello, This is a comment :) */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
