import { Sidebar, AddNote, DisplayNote } from "../components/allComp";
export const Notes = () => {
    return (
        <div>
            <Sidebar />
            <AddNote />
            <DisplayNote />
        </div>
    )
}