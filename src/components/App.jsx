// Importando React
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { Login } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { Register } from "../pages/Register";

export function App() {
  return (
    <>
      <Container className="Container" sx={{ boxShadow: 3, p: 5 }}>
        <Typography variant="h1" textAlign="center">
          Pelitoria
        </Typography>
        <Typography variant="h6" component="h2">
          Encuentra todo lo que quieres ver.
        </Typography>
        <Typography variant="h4">
          Encuentra una recomendacion cinematografica si es que estas indeciso
          sobre que es lo que quieres ver hoy.
        </Typography>
        <Button
          startIcon={<AgricultureIcon />}
          color="success"
          variant="contained"
        >
          Mi primer boton
        </Button>
        <Button color="error" variant="contained">
          Mi primer boton
        </Button>
        <Button
          color="primary"
          variant="outlined"
          endIcon={<AddModeratorIcon />}
        >
          Mi primer boton
        </Button>
        <Box mt={3} sx={{ border: 2, p: 5 }}>
          <Typography>Esta es una caja.</Typography>
        </Box>
      </Container>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}
