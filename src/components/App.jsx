// Importando React
import { Container } from "@mui/material";
import React from "react";
import { Login } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

export function App() {
  return (
    <>
      <Container className="Container" sx={{ p: 5 }}>

      </Container>

      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}
