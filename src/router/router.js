import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}