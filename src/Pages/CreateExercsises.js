import React, { useContext, useRef } from "react";
import { Context } from "../App";

const CreateExercsises = () => {
  //Hooks
  const context = useContext(Context);
  const ref = useRef();

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();
    context.setExerciseList({
      name: ref.current.value,
      description: context.description,
      duration: context.duration,
      date: context.date,
    });
  };

  //JSX
  return (
    <form className="ui form">
      <div className="field">
        <label>Name</label>
        <select required ref={ref}>
          {context.allUsers.map((user) => {
            return (
              <option key={user.name} value={user.name}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          name="Description"
          placeholder="Description"
          onChange={(e) => context.setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Duration</label>
        <input
          type="number"
          name="Duration"
          placeholder="Duration"
          onChange={(e) => context.setDuration(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          placeholder="Date"
          onChange={(e) => context.setDate(e.target.value)}
        />
      </div>

      <button
        className="ui button blue"
        type="submit"
        onClick={(e) => onSubmit(e)}
        disabled={
          !context.date ||
          !context.duration ||
          !context.description ||
          ref.current === undefined
        }
        style={{ marginTop: "15px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default CreateExercsises;
