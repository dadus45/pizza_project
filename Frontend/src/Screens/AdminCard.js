import React, { useEffect, useState } from "react";
import AllPizza from "./pizza-data";
import PizzaRender from "./PizzaRender";
import { createUrl } from "../utils/utils";
import axios from "axios";
import UpdateDelete from "./UpdateDelete";
const AdminCard = () => {
 
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
    <>
      {pizzas.map((pizza) => {
        return <UpdateDelete pizza={pizza} />;
      })}





    </>
  );
};

export default AdminCard;

