import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/");
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div>
      NotFound
      <button onClick={clickHandler}>Move to Home Page</button>
      <button onClick={backHandler}>Go Back</button>
    </div>
  );
};

export default NotFound;
