export const NoteReducer = (noteState, action) => {
    switch (action.type) {
        case "SET-TITLE":
            return { ...noteState, title: action.payload }
        case "SET-CONTENT":
            return { ...noteState, content: action.payload }
        case "SET-COLOR":
            return { ...noteState, color: action.payload }
        case "SET-LABEL":
            return { ...noteState, label: action.payload }
        case "SET-PRIORITY":
            return { ...noteState, priority: action.payload }
        case "SET-PIN":
            return {...noteState, pin: action.payload }
        case "SET-DATE":
            return { ...noteState, date: action.payload}
        case "EDIT_NOTE":
            return {...action.payload}
        case "CLEAR-NOTE":
            return {
                title: "",
                content: "",
                color: "",
                label: "",
                priority: "",
                pin: false,
                date: Number(new Date())
            }
        default:
            return noteState;
    }
}