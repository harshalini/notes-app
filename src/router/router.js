import React from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home";

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    )
}