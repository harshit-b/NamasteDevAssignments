import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./pages/Body";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
