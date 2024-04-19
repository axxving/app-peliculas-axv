import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import backgroundImage from "../assets/imgs/1.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#3f51b5",
          color: "#fff",
          py: 8,
          height: "100%", // Ajustamos la altura al 100%
        }}
      >
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Grid container spacing={3} sx={{ height: "100%" }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                ¡Relájate y disfruta!
              </Typography>
              <Typography variant="body1" gutterBottom>
                En PILU, entendemos lo emocionante que es
                esperar tu pedido. Queremos que te sientas tranquilo y seguro de
                que llegará a ti en el momento justo. Mientras esperas, tómate
                un momento para relajarte y disfrutar del proceso.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={backgroundImage}
                alt="background"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  height: "auto",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
