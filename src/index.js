import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { NoteDataProvider } from "./context/noteContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <NoteDataProvider>
          <App />
        </NoteDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
