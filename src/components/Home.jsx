import React, { useEffect, useState } from "react";
import usecontext from "./usecontext";
import NoteComponent from "./NoteComponent";

const Home = () => {
  let { state, dispatch } = usecontext();

  return (
    <div>
      <div className="NotecomponetParent">
        {state.map((item) => (
          <NoteComponent key={item.id} data={item} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Home;
