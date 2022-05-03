export const NoteReducer = (noteState, action) => {
    switch (action.type) {
        case "SET-TITLE":
            return { ...noteState, title: action.payload }
        case "SET-CONTENT":
            return { ...noteState, content: action.payload }
        case "CLEAR-NOTE":
            return {
                title: "",
                content: ""
            }
        default:
            return noteState;
    }
}