import React from "react";
import { useNoteData, useArchive } from "../../context/allContext";

export const DisplayNote = () => {
  const { note } = useNoteData();
  const { ArchiveNote } = useArchive();
  return (
    <div>
      <h1 className="note-heading">Your Notes</h1>
      {note.length > 0 ? 
      <div className="note-grid">
        {note.map(({ title, content, _id }) => (
          <div key={_id} className="added-note">
            <div className="title-div">
              <h3>{title}</h3>
            </div>
            <div className="content-div">
              <p className="note-content">{content}</p>
            </div>
            <div className="note-actions">
              <button onClick={() => ArchiveNote(note, _id)}><i className="fa-solid fa-arrow-down-long"></i></button>
              <button><i className="fa-solid fa-trash-can"></i></button>
              <button><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
          </div>
        )
        )}
      </div> : 
      <h2>No notes here! Add a note!</h2>}
    </div>
  );
}