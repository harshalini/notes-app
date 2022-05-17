import React from "react";
import { useNoteData, useArchive, useTrash } from "../../context/allContext";
import { GetPriority, GetColor, getLabeledNotes} from "../../utils/filter-utils";

export const DisplayNote = () => {
  const { note } = useNoteData();
  const { ArchiveNote } = useArchive();
  const { TrashNote } = useTrash();

  const compose = (...getNoteCard) => (note) => getNoteCard.reduce((data, getNoteCard) => getNoteCard(data), note);
  const filteredProduct = compose(GetPriority, GetColor, getLabeledNotes)(note)
  return (
    <div>
      <h1 className="note-heading">Your Notes</h1>
      {note.length > 0 ?
        <div className="note-grid">
          {filteredProduct.map(({ title, content, _id, color, label, priority }) => (
            <div key={_id} className={`added-note color-${color}`}>
              <div className="title-div">
                <h3>{title}</h3>
              </div>
              <div className="content-div">
                <p className="note-content">{content}</p>
              </div>
              <div className="label-and-priority">
                {label !== "" ? <p className="note-flex added-label">{label}</p> : null}
                {priority !== "" ? <p className="note-flex added-priority">{priority}</p> : null}
              </div>
              <div className="note-actions">
                <button onClick={() => ArchiveNote(note, _id)}><i className="fa-solid fa-arrow-down-long"></i></button>
                <button onClick={() => TrashNote(note, _id)}><i className="fa-solid fa-trash-can"></i></button>
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