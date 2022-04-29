import "./App.css";
import { Navbar } from "./components/allComp";
import { AppRouter } from "./router/router"
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
