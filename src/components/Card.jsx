import { Box, Button, Container, Paper, Typography, styled } from "@mui/material";
import React from "react";

// Componente
export function Card() {
  // Haciendo un componente
  const Img = styled("img")({
    with: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          overflow: "hidden",
          mt: 5,
        }}
      >
        <Img
          src="https://via.placeholder.com/200"
          alt="Mi hermosa imagen con styled"
        />
        <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
            <Typography variant="h4">Product Name</Typography>
            <Typography variant="body1">Product Description</Typography>
            <Button variant="outlined">Add Cart</Button>
        </Box>
        <Box sx={{ mr: 2 }} component="p">
            $19.99
        </Box>
      </Paper>
    </Container>
  );
}
