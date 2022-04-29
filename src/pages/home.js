import { Navbar } from "../components/allComp"
export const Home = () => {
    return (
        <div>
            <Navbar />
            <img src="../assets/note-img.svg" className="note-img" />
            <p className="txt">Express your thoughts and write them down!</p>
            <button id="primary-btn">Write now</button>
        </div>
    )
}