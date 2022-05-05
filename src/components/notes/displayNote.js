import React from "react";
import { useNoteData } from "../../context/allContext";

export const DisplayNote = () => {
  const { note } = useNoteData();

  return (
    <div>
    <h1 className="note-heading">Your Notes</h1>
      <div className="note-grid">
        {note.map(({title, content, _id}) => (
            <div key={_id} className="added-note">
              <div className="title-div">
                <h3>{title}</h3>
              </div>
                <div className="content-div">
                <p className="note-content">{content}</p>
                </div>
            </div>
          )
        )}
      </div>
      </div>
  );
}