import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { NoteReducer } from "./reducers/noteReducer";
import axios from "axios";
import { AddNoteHandler } from "../noteServices/addNoteService";
const NotesContext = createContext()

const NoteDataProvider = ({ children }) => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { notes }
        } = await axios.get('/api/notes', {
          headers: { authorization: token }
        });
        setNote(notes);
      } catch {
        console.error("an error occured");
      }
    })();
  }, []);

  const [noteState, dispatch] = useReducer(NoteReducer, {
    title: "",
    content: ""
  })

  const AddNewNote = async (note) => {
    const getNote = await AddNoteHandler(note)
    setNote(getNote.data.notes)
    console.log(note)
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