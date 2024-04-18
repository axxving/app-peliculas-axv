import { Container, Grid } from "@mui/material";
import React from "react";

export function Header() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odit alias rerum quaerat quod quia aspernatur obcaecati omnis
            facilis doloremque laborum vel eaque nam at nisi quasi, corporis,
            nihil temporibus!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odit alias rerum quaerat quod quia aspernatur obcaecati omnis
            facilis doloremque laborum vel eaque nam at nisi quasi, corporis,
            nihil temporibus!
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            odit alias rerum quaerat quod quia aspernatur obcaecati omnis
            facilis doloremque laborum vel eaque nam at nisi quasi, corporis,
            nihil temporibus!
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
