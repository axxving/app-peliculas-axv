import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

export function Cards() {
  return (
    <Container>
      <Card
        sx={{
          transition: "scale(1.05)",
          "&:hover": {
            transform: "scale(1.05)",
          },

          mt: 5,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/1000x200"
            height="200"
            alt="una descripcion"
          />
          <CardContent>
            <Typography variant="h5">Card Title</Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam
              deserunt suscipit ipsam voluptate rem, labore fuga cupiditate
              laboriosam alias facilis quidem, assumenda ut! Beatae iusto
              incidunt nostrum nulla dolorum.
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained">Add</Button>
          <Button variant="outlined" color="error">
            Remove
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
