import React, { useReducer } from "react";
import Noteform from "./components/Notesform.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import EachNote from "./components/EachNotes.jsx";
import { createContext } from "react";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];

      case "DELETE":
        return state.filter((item) => item.id !== action.payload.id);

      default:
        return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, [
    {
      id: 2,
      title: "CHM101",
      description: "This class is very hard i donnt even know whats going on",
    },
    {
      id: 1,
      title: "PHY101",
      description: "This class is very hard i donnt even know whats going on",
    },
  ]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/createNote" element={<Noteform />}></Route>
        <Route path="/note/:id" element={<EachNote />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
