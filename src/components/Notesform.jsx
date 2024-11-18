import React, { useState } from "react";
import usecontext from "./usecontext";
const NotesForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let { state, dispatch } = usecontext();
  function handleclick() {
    dispatch({ type: "ADD", payload: { id: title, title, description } });
    setTitle("");
    setDescription("");
  }
  return (
    <div className="Note-form">
      <h1>Create Note</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        id="input_title"
        placeholder="Enter Title"
        value={title}
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        id="input_description"
        value={description}
      />
      <button onClick={handleclick}>Create</button>
    </div>
  );
};

export default NotesForm;
