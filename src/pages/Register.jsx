import React from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";

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

export const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          component={Paper}
          elevation={0}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: (theme) => theme.spacing(4),
          }}
        >
          <Typography variant="h5" gutterBottom>
            Registro
          </Typography>
          <form noValidate sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre de usuario"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              type="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox id="terms" />}
              label="Acepto los términos y condiciones"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Registrarse
            </Button>
          </form>
          <Typography variant="body2" align="center">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" variant="body2">
              Inicia sesión aquí
            </Link>
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
