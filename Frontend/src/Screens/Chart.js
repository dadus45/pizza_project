import React, { useEffect } from "react";
import { useState } from "react";
import "./styles/App.css";
import { getConfig } from "../utils/utils";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import axios from "axios";

const Chart = () => {
    const config = getConfig(sessionStorage.getItem("jwtToken"));

const [data,setData]=useState([]);
useEffect(()=>{loadCart()},[])
const loadCart = () => {
    axios
      .get("http://127.0.0.1:7070/cartItem/chart", config)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Statisticks</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="total"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;