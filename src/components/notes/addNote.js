import { useNoteData } from "../../context/allContext"

export const AddNote = () => {
    const { noteState, dispatch, AddNewNote } = useNoteData();
    return (
        <div>
            <form className="note-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    AddNewNote(noteState);
                    dispatch({ type: "CLEAR-NOTE" });
                }
                }>
                <input
                    value={noteState.title}
                    onChange={
                        (e) => dispatch({ type: "SET-TITLE", payload: e.target.value })}
                    placeholder="Title"
                    className="note-ip title-input"
                    required
                />
                <input value={noteState.content}
                    onChange={(e) => dispatch({ type: "SET-CONTENT", payload: e.target.value })}
                    placeholder="Add a note here"
                    className="note-ip content-input"
                    required
                />
                <button
                    className="add-btn"
                    title="Add Note"
                    type="submit">
                    <i className="fa-solid fa-circle-plus"></i>
                </button>
            </form>
        </div>
    )
}