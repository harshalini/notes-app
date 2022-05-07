import { Link } from "react-router-dom"
export const Sidebar = () => {
    return (
        <div className="flex-div">
            <aside className="lib-sidebar">
                <ul>
                    <Link to="/notes"><li><i className="sidebar-icon fa-solid fa-clipboard"></i><span>Notes</span></li></Link>
                    <Link to="/archive"><li><i className="sidebar-icon fa-solid fa-arrow-down-long"></i><span>Archive</span></li></Link>
                    <Link to="/trash"><li><i className="sidebar-icon fa-solid fa-trash-can"></i><span>Trash</span></li></Link>
                </ul>
            </aside>
        </div>
    )
}