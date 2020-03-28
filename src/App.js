import React from "react";
import "./App.scss";

//Components
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
