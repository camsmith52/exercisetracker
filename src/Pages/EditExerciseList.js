import React,{ useContext} from 'react'
import axios from 'axios';
import { Context } from '../App';
import { useLocation } from 'react-router-dom';

const EditExerciseList = () => {
   //Hooks
  const context = useContext(Context);
  
  const exercise = useLocation()
  const {state} = exercise
  

  //Submit button function
  const onSubmit = (e) => {
    e.preventDefault();
    const exerciseToAdd = {
      username: state.username,
      description: context.description,
      duration: context.duration,
      date: context.date,
    };
    console.log(exerciseToAdd);
    context.setAddExercise(exerciseToAdd);

    axios.post(`http://localhost:5000/exercises/update/${state._id}`, exerciseToAdd);
  };
  console.log(context.allUsers)
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
          // value={state.description}
          onChange={(e) => context.setDescription(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Duration</label>
        <input
          type="number"
          name="Duration"
          placeholder="Duration"
          // value={state.duration}
          onChange={(e) => context.setDuration(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          placeholder="Date"
          // value={state.date}
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
          !context.description 
          
        }
        style={{ marginTop: "15px" }}
      >
        Submit
      </button>
    </form>
  );
};


export default EditExerciseList