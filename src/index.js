import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom"
import { NoteDataProvider, AuthenticationProvider, ArchiveProvider, TrashProvider } from "./context/allContext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <TrashProvider>
          <ArchiveProvider>
            <NoteDataProvider>
              <App />
            </NoteDataProvider>
          </ArchiveProvider>
        </TrashProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
