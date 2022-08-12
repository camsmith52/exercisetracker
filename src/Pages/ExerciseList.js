import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

const ExerciseList = () => {
  //Hooks
  const context = React.useContext(Context);

  //Delete button function
  const onDelete = (name) => {
    context.setDeleteExercise(name);
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
            <tr key={exercise.name}>
              <td data-label="Name">{exercise.name}</td>
              <td data-label="Description">{exercise.description}</td>
              <td data-label="Duration">{exercise.duration}</td>
              <td data-label="Date">{exercise.date}</td>
              <td data-label="Edit/Delete">
                <Link to="/createexercises">Edit</Link> |{" "}
                <button onClick={() => onDelete(exercise.name)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExerciseList;
