import React from "react";
import { Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Register } from "./log/register";
import { Login } from "./log/login";
import { MainLayout } from "./layout/main-layout";
import { Qarz } from "./components/qarz";
import { SeeQarz } from "./components/seeQarz";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/app" element={<MainLayout />} />
                <Route path="/qarz" element={<Qarz />} />
                <Route path="/seeqarz/:id" element={<SeeQarz />} />
            </Routes>
        </>
    );
}

export default App;
