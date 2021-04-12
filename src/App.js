import React, { useState } from "react";
import classes from './App.css';
import SelectMenu from "./components/SelectMenu";
import Input from "./components/Input";
import RenderItems from "./components/RenderItems";

function App() {
  const [type, setType] = useState("")
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);

  const pushItem = () => {
    if (type === "")
      return;
    setItems(items => [...items, [type, description]])
  }

  return (
    <div className="app">
      <SelectMenu type={type} setType={setType} />
      <Input description={description} setDescription={setDescription} />
      <button onClick={pushItem}>Create!</button>
      <RenderItems items={items}/>
    </div>
  );
}

export default App;
