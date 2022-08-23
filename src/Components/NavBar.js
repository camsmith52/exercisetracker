import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //JSX
  return (
    <div className="ui secondary  menu">
      <Link to="/" className="active item">
        Home
      </Link>
      <Link to="/exerciselist" className="item">
        Exercise List
      </Link>
      <Link to="/createexercises" className="item">
        Create Exercises
      </Link>
      <Link to="/createuser" className="ui item">
        Create User
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
