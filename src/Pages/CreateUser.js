import React, { useContext, useState } from "react";
import { Context } from "../App";
import axios from "axios";

const CreateUser = () => {
  //State
  const [userCreated, setUserCreated] = useState(false);

  //Hooks
  const context = useContext(Context);

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users/add", { username: context.username })
      .then((res) => {
        console.log("User added");
      });
    setUserCreated(true);
  };

  //JSX
  return (
    <form className="ui form">
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={(e) => context.setName(e.target.value)}
        />
      </div>

      <button
        className="ui button blue"
        type="submit"
        onClick={(e) => onSubmit(e)}
        disabled={!context.username}
      >
        Submit
      </button>
      {userCreated ? (
        <p>User created! Create an exercise to get started.</p>
      ) : (
        ""
      )}
    </form>
  );
};

export default CreateUser;
