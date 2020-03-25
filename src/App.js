import React from "react";
import "./App.scss";

//Components
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
