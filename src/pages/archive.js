import { useArchive } from "../context/archiveContext"
import { Sidebar } from "../components/allComp";
export const ArchivePage = () => {
    const { noteArchive, RestoreArchiveNote } = useArchive();
    return (
        <div>
            <Sidebar />
            <div>
                <div className="archive-div">
                    <h1 className="note-heading">Your Archives</h1>
                    <div className="note-grid">
                        {noteArchive.map(({ title, content, _id }) => (
                            <div key={_id} className="added-note">
                                <div className="title-div">
                                    <h3>{title}</h3>
                                </div>
                                <div className="content-div">
                                    <p className="note-content">{content}</p>
                                </div>
                                <div className="note-actions">
                                    <button onClick={() => RestoreArchiveNote(noteArchive, _id)}><i className="fa-solid fa-arrow-up"></i></button>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}