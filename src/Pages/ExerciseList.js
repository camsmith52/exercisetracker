import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import axios from "axios";
import moment from "moment";

const ExerciseList = () => {
  //Hooks
  const context = React.useContext(Context);

  useEffect(() => {
    const response = async () => {
      await axios.get("http://localhost:5000/exercises").then((res) => {
        console.log("Exercises loaded");
        console.log(res.data);
        context.setExerciseList(res.data);
      });
    };
    response();
    //eslint-disable-next-line
  }, []);

  //Delete button function
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:5000/exercises/${id}`).then((res) => {
      console.log("exercise successfully deleted");
      context.setDeleteExercise(id);
    });
  };
  //JSX
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Exercise</th>
          <th>Duration</th>
          <th>Date</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {context.exerciseList.map((exercise) => {
          return (
            <tr key={exercise._id}>
              <td data-label="Name">{exercise.username}</td>
              <td data-label="Description">{exercise.description}</td>
              <td data-label="Duration">{exercise.duration}</td>
              <td data-label="Date">
                {moment`${exercise.date}`.utc().format("dddd")}
              </td>
              <td data-label="Edit/Delete">
                <NavLink
                key={exercise._id}
                  to= {`/edit/${exercise._id}`}
                  state= {exercise}
                >
                  Edit
                </NavLink>{" "}
                |<button onClick={() => onDelete(exercise._id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExerciseList;
