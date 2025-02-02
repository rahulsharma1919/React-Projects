import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      Labs
      <button onClick={clickHandler}>Move to About</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default Labs;
