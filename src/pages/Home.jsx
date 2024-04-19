import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3f51b5",
        color: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              ¡Relájate y disfruta!
            </Typography>
            <Typography variant="body1" gutterBottom>
              En [Nombre de tu empresa], entendemos lo emocionante que es
              esperar tu pedido. Queremos que te sientas tranquilo y seguro de
              que llegará a ti en el momento justo. Mientras esperas, tómate un
              momento para relajarte y disfrutar del proceso.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};