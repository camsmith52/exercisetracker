import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../App";
import { useLocation } from "react-router-dom";

const EditExerciseList = () => {
  //Hooks
  const context = useContext(Context);

  const exercise = useLocation();
  const { state } = exercise;

  useEffect(() => {
    const response = async () => {
      await axios
        .get(`http://localhost:5000/exercises/${state._id}`)
        .then((res) => {
          console.log(`Users loaded: ${res.data.username}`);
          context.setDescription(res.data.description);
          context.setDuration(res.data.duration);
          context.setDate(res.data.date.slice(0, 10));
        });
    };
    response();
    // eslint-disable-next-line
  }, []);

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();
    const exerciseToAdd = {
      username: state.username,
      description: context.description,
      duration: context.duration,
      date: context.date,
    };

    context.setAddExercise(exerciseToAdd);

    axios.post(
      `http://localhost:5000/exercises/update/${state._id}`,
      exerciseToAdd
    );
  };

  //JSX
  return (
    <form className="ui form">
      <div className="field">
        <label>Name</label>
        <select>
          <option key={state._id} value={state.username}>
            {state.username}
          </option>
          ;
        </select>
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          name="Description"
          placeholder="Description"
          value={context.description}
          onChange={(e) => context.setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Duration</label>
        <input
          type="number"
          name="Duration"
          placeholder="Duration"
          value={context.duration}
          onChange={(e) => context.setDuration(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={context.date}
          onChange={(e) => context.setDate(e.target.value)}
        />
      </div>

      <button
        className="ui button blue"
        type="submit"
        onClick={(e) => onSubmit(e)}
        disabled={!context.date || !context.duration || !context.description}
        style={{ marginTop: "15px" }}
      >
        Submit
      </button>
    </form>
  );
};

export default EditExerciseList;
