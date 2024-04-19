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

export const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
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
            borderRadius: "0",
            flex: "1",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Iniciar sesión
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
              name="password"
              label="Contraseña"
              type="password"
            />
            <FormControlLabel
              control={<Checkbox id="rememberMe" />}
              label="Recordar contraseña"
            />
            <Link href="/forgot-password" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Iniciar sesión
            </Button>
          </form>
          <Typography variant="body2" align="center">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" variant="body2">
              Regístrate aquí
            </Link>
          </Typography>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

