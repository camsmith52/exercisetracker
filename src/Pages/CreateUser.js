import React, { useContext } from "react";
import { Context } from "../App";

const CreateUser = () => {
  //Hooks
  const context = useContext(Context);

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();
    context.setAllUsers({ name: context.name });
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
        disabled={!context.name}
      >
        Submit
      </button>
    </form>
  );
};

export default CreateUser;
