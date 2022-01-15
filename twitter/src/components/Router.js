/* disable-eslint */
import React from "react";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {props.isLoggedIn ? (
          
            <Route exact path="/" element={<Home />} />
         
        ) : (
          
            <Route exact path="/" element={<Auth />} />
          
          
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
