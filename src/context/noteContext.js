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
      } catch(error) {
        console.error(error);
      }
    })();
  }, [note]);

  const [noteState, dispatch] = useReducer(NoteReducer, {
    title: "",
    content: ""
  })

  const AddNewNote = async (note) => {
    const getNote = await AddNoteHandler(note)
    setNote(getNote.data.notes)
  }

  return (
    <NotesContext.Provider
      value={{ noteState, dispatch, note, AddNewNote}}>
      {children}
    </NotesContext.Provider>
  );
}

const useNoteData = () => useContext(NotesContext)

export { NoteDataProvider, useNoteData }