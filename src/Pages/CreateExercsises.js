import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

const CreateExercsises = () => {
  //Hooks
  const context = useContext(Context);
  const ref = useRef();
  let navigate = useNavigate();

  useEffect(() => {
    const response = async () => {
      await axios.get("http://localhost:5000/users").then((res) => {
        console.log("Users loaded");
        context.setAllUsers(res.data);
      });
    };
    response();
    // eslint-disable-next-line
  }, []);

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();
    const exerciseToAdd = {
      username: ref.current.value,
      description: context.description,
      duration: context.duration,
      date: context.date,
    };

    context.setAddExercise(exerciseToAdd);

    axios.post("http://localhost:5000/exercises/add", exerciseToAdd);

    navigate("/exerciselist");
  };

  //JSX
  return (
    <form className="ui form">
      <div className="field">
        <label>Name</label>
        <select required ref={ref}>
          {context.allUsers.map((user, index) => {
            return (
              <option key={user._id} value={user.username}>
                {user.username}
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
          placeholder="What exercise did you do?"
          onChange={(e) => context.setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Duration</label>
        <input
          type="number"
          name="Duration"
          placeholder="How many minutes?"
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
