import React from "react";

import Input from "./components/Input";
import Select from "./components/Select";

import "./styles/app.css";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Input />
        <Select />
      </div>
    </div>
  );
}

export default App;
