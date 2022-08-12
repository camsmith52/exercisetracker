import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateExercsises from "./Pages/CreateExercsises";
import CreateUser from "./Pages/CreateUser";
import ExerciseList from "./Pages/ExerciseList";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

//Create context for global state
export const Context = React.createContext();

//Initial state
const initialState = {
  name: "",
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
      return { ...state, name: action.value };
    case "SET_DESCRIPTION":
      return { ...state, description: action.value };
    case "SET_DURATION":
      return { ...state, duration: action.value };
    case "SET_DATE":
      return { ...state, date: action.value };
    case "SET_ALLUSERS":
      return { ...state, allUsers: [...state.allUsers, action.value] };
    case "SET_EXERCISELIST":
      return { ...state, exerciseList: [...state.exerciseList, action.value] };
    case "SET_DELETEEXERCISE":
      return { ...state, exerciseList: [...state.exerciseList.filter(ele=>ele.name!==action.value)] };
    default:
      return state;
  }
};

function App() {
  //useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  //Global state
  const value = {
    name: state.name,
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
    setDeleteExercise: (value) => dispatch({ type: "SET_DELETEEXERCISE", value: value }),
  };
  //Routes with pages as elements
  return (
    <Router>
      <NavBar />
      <Context.Provider value={value}>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/createexercises" element={<CreateExercsises />}></Route>
          <Route path="/exerciselist" element={<ExerciseList />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
