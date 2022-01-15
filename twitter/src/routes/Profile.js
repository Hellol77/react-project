import { authService } from "fBase";
import React from "react";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const history = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    history("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default LogOut;
