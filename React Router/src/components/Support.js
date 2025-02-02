import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/labs");
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      Support
      <button onClick={clickHandler}>Move to Labs</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default Support;
