import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Menu />

      <Footer />
    </>
  );
}

export default App;
