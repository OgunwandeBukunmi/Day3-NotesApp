import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usecontext from "./usecontext";

const EachNote = () => {
  let { state } = usecontext();

  const { id } = useParams();
  let note;
  state.map((item) => {
    console.log(item);
    if (item.id == id) {
      note = item;
    } else {
      note = {
        title: "Nothing found",
        description: "Status code 404 , Data not found",
      };
    }
  });

  return (
    <div className="Eachnote">
      <div>
        <h1>{note.title}</h1>
        <h3>{note.description}</h3>
      </div>
    </div>
  );
};

export default EachNote;
