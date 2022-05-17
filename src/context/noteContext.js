import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { NoteReducer } from "./reducers/noteReducer";
import axios from "axios";
import { AddNoteHandler } from "../noteServices/allServices";
const NotesContext = createContext()

const NoteDataProvider = ({ children }) => {
  const [note, setNote] = useState([]);
  const authToken = localStorage.getItem("authToken")

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { notes }
        } = await axios.get('/api/notes', {
          headers: { authorization: authToken }
        });
        setNote(notes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [note]);

  const [noteState, dispatch] = useReducer(NoteReducer, {
    title: "",
    content: "",
    color: "",
    label: "",
    priority: ""
  })

  const AddNewNote = async (note) => {
    const getNote = await AddNoteHandler(note)
    setNote(getNote.data.notes)
  }

  const allLabels = note.reduce((acc, curr) => {
    return (acc = [...acc, curr.label]);
  }, []);

  const labelSet = [...new Set(allLabels)];
  const individualLabel = labelSet.filter((label) => label !== undefined);
  return (
    <NotesContext.Provider
      value={{ noteState, dispatch, note, AddNewNote, individualLabel }}>
      {children}
    </NotesContext.Provider>
  );
}

const useNoteData = () => useContext(NotesContext)

export { NoteDataProvider, useNoteData }