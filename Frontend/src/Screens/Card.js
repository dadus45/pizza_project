import React, { useEffect, useState } from "react";
import AllPizza from "./pizza-data";
import PizzaRender from "./PizzaRender";
import { createUrl } from "../utils/utils";
import axios from "axios";
import { Grid } from "@mui/material";

const Card = () => {
 
  const url = createUrl("/pizza");
  const jwtToken = sessionStorage.getItem("jwtToken");
  const config = {
    headers: {
      Authorization: jwtToken,
    },
  };
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data);
        setPizzas(res.data);
        console.log(pizzas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid container>
      {pizzas.map((pizza) => {
        return <Grid item xs={12} md={4}>
            <PizzaRender pizza={pizza} />
        </Grid>;
      })}
    </Grid>
  );
};

export default Card;
