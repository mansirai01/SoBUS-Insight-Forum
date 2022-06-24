// @mui
import { Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
// components

import React, {useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";





import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


import { df } from "../../_mock/Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const dataset = df;
const labels = [...new Set(dataset.map(row => row.State))].sort()

export const data = {
  labels,
  datasets: [
    {
      label: 'Gender (F)',
      data: labels.map(state => {
        const count = dataset.filter(row => row.State === state && row.Gender === "Female").length
        return count;
      }),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      label: 'Gender (M)',
      data: labels.map(state => {
        const count = dataset.filter(row => row.State === state && row.Gender === "Male").length
        return count;
      }),
      backgroundColor: 'rgba(53, 162, 235, 0.6)',
    },
  ],
};

export function DataChart() {
  return <Bar options={options} data={data} />;
}

