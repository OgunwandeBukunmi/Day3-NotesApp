import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteComponent = ({ data, dispatch }) => {
  let navigate = useNavigate();

  function redirect() {
    navigate(`/note/${data["id"]}`);
  }
  function handleclick() {
    dispatch({ type: "DELETE", payload: data });
  }
  return (
    <div onDoubleClick={redirect} className="NoteComponent">
      <span>Edit</span>
      <span>{data.title}</span>
      <span onClick={handleclick}>Delete</span>
    </div>
  );
};

export default NoteComponent;
