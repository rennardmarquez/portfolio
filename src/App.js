import React from "react";
import "./App.scss";

//Components
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Main />
    </div>
  );
};

export default App;
