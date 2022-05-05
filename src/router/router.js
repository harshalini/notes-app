import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home, Login, SignUp, Notes } from "../pages";
import { RequiresAuth } from "../pages/auth/requiresAuth";
export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/signup" element = {<SignUp />} />
            <Route path="/notes" element = {
            <RequiresAuth>
            <Notes />
            </RequiresAuth>} />
        </Routes>
    )
}