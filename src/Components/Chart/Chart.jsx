import React from "react";
import "./Chart.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Player 1",
    "# of entries": 4000,
    "# of participants": 2400,
  },
  {
    name: "Player 2",
    "# of entries": 700,
    "# of participants": 1400,
  },
  {
    name: "Player 3",
    "# of entries": 8000,
    "# of participants": 12400,
  },
  {
    name: "Player 15",
    "# of entries": 14000,
    "# of participants": 2400,
  },
  {
    name: "Player 12",
    "# of entries": 10,
    "# of participants": 2400,
  },
  {
    name: "Player 11",
    "# of entries": 41000,
    "# of participants": 200,
  },
  {
    name: "Player 16",
    "# of entries": 4000,
    "# of participants": 2400,
  },
  {
    name: "Player 17",
    "# of entries": 42000,
    "# of participants": 21400,
  },
];

export default function Chart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="# of entries" fill="#8a9e27" />
      <Bar dataKey="# of participants" fill="white" />
    </BarChart>
  );
}
