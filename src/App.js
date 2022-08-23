import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateExercsises from "./Pages/CreateExercsises";
import CreateUser from "./Pages/CreateUser";
import ExerciseList from "./Pages/ExerciseList";
import EditExerciseList from "./Pages/EditExerciseList";

import NavBar from "./Components/NavBar";

//Create context for global state
export const Context = React.createContext();

//Initial state
const initialState = {
  username: "",
  lastName: "",
  description: "",
  duration: "",
  allUsers: [],
  date: null,
  exerciseList: []
};

//Reducer function from useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, username: action.value };
    case "SET_DESCRIPTION":
      return { ...state, description: action.value };
    case "SET_DURATION":
      return { ...state, duration: action.value };
    case "SET_DATE":
      return { ...state, date: action.value };
    case "SET_ALLUSERS":
      return { ...state, allUsers: action.value };
    case "SET_EXERCISELIST":
      return { ...state, exerciseList: action.value };
    case "SET_ADD_EXERCISE":
      return { ...state, exerciseList: [...state.exerciseList,action.value] };
    case "SET_DELETEEXERCISE":
      return {
        ...state,
        exerciseList: [
          ...state.exerciseList.filter((ele) => ele._id !== action.value),
        ],
      };
    default:
      return state;
  }
};

function App() {
  //useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  //Global state
  const value = {
    username: state.username,
    description: state.description,
    allUsers: state.allUsers,
    duration: state.duration,
    date: state.date,
    exerciseList: state.exerciseList,
    setName: (value) => dispatch({ type: "SET_NAME", value: value }),
    setDescription: (value) =>dispatch({ type: "SET_DESCRIPTION", value: value }),
    setDuration: (value) =>dispatch({ type: "SET_DURATION", value: value }),
    setDate: (value) =>dispatch({ type: "SET_DATE", value: value }),
    setAllUsers: (value) => dispatch({ type: "SET_ALLUSERS", value: value }),
    setExerciseList: (value) => dispatch({ type: "SET_EXERCISELIST", value: value }),
    setAddExercise: (value) => dispatch({ type: "SET_ADD_EXERCISE", value: value }),
    setDeleteExercise: (value) => dispatch({ type: "SET_DELETEEXERCISE", value: value }),
  };
  //Routes with pages as elements
  return (
    <Router>
      <NavBar />
      <Context.Provider value={value}>
        <Routes>
          <Route path="/" exact element={<ExerciseList />}></Route>
          <Route path="/createexercises" element={<CreateExercsises />}></Route>
          <Route path="/exerciselist" element={<ExerciseList />}></Route>
          <Route path="/edit/:id" element={<EditExerciseList />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
