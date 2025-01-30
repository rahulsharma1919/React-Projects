import React, { useEffect, useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  // const [name, setName] = useState("Rahul");

  //Variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("CHANGES DONE");
  // });

  //Variation 2 -> First Render
  // useEffect(() => {
  //   console.log("CHANGES DONE");
  // }, []);

  //Variation 3 -> First Render + when dependency changes
  // useEffect(() => {
  //   console.log("CHANGES DONE");
  // }, [name]);

  //Variation 4 -> To handle unmounting a component
  useEffect(() => {
    //Add event listener
    console.log("Listener added");
    return () => {
      console.log("Listener removed");
    };
  }, [text]);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default App;
