import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home, Login, SignUp } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/signup" element = {<SignUp />} />
        </Routes>
    )
}