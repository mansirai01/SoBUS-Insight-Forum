// @mui
import { Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Pagination from "@mui/material/Pagination";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

// components

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Page from "../premade-components/Page";

import { df } from "../_mock/df";

import { exportCSVFile } from "../utils/downloadCSV";

// ----------------------------------------------------------------------

export default function SearchContacts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);
  const [nameQuery, setNameQuery] = useState("");
  const [genderQuery, setGenderQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [occupationQuery, setOccupationQuery] = useState("");
  const [sectorList, setSectorList] = useState("");

  const [personName, setPersonName] = useState([]);

  const names = [
    "Some other Sector",
    "Sustainable Food & Agriculture",
    "Culture, Arts & Tourism",
    "Housing, Infra & Transport",
    "Health & Well-being",
    "Quality Education & Skilling",
  ];

  const dfNew = df.filter((row) =>
    row.Name.toLowerCase().includes(nameQuery.toLowerCase()) &&
    row.Location.toLowerCase().includes(locationQuery.toLowerCase()) &&
    row["Gender (M or F)"].toLowerCase().includes(genderQuery.toLowerCase()) &&
    row.Occupation.toLowerCase().includes(occupationQuery.toLowerCase()) &&
    sectorList.length == 0
      ? true
      : sectorList.includes(row.Category)
  );

  const indexOfLastEntry = currentPage * dataPerPage;
  const indexOfFirstEntry = indexOfLastEntry - dataPerPage;
  const currentData = dfNew.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleChangeCategory = (event) => {
    const {
      target: { value },
    } = event;
    setSectorList(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const headers = {
    sno: "Sr. No",
    name: "Name",
    Gender: "Gender",
    Location: "Location",
    Occupation: "Occupation",
    Category: "Category",
  };

  const handleDownload = () => {
    exportCSVFile(headers, dfNew, "nombres");
  };

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Search Contacts
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                placeholder="Name"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={genderQuery}
                label="Age"
                onChange={(e) => setGenderQuery(e.target.value)}
              >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                <MenuItem value={""}>Clear</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  placeholder="Location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </FormControl>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                placeholder="Occupation"
                value={occupationQuery}
                onChange={(e) => setOccupationQuery(e.target.value)}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                multiple
                value={personName}
                onChange={handleChangeCategory}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <button variant="outlined" style={{backgroundColor: "#FFF2E2", padding: "0.3rem 1rem", "marginBottom": "15px"}} onClick={handleDownload}>DOWNLOAD DATA!</button>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Gender (M or F)</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Occupation</TableCell>
                <TableCell align="right">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.slice(0, 5).map((row) => (
                <TableRow
                  key={row["Sl. No."]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row["Gender (M or F)"]}</TableCell>
                  <TableCell align="right">{row.Location}</TableCell>
                  <TableCell align="right">{row.Occupation}</TableCell>
                  <TableCell align="right">{row.Category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{ margin: "2rem 0" }}>
          <Pagination
            count={Math.ceil(dfNew.length / dataPerPage)}
            color="primary"
            page={currentPage}
            onChange={handleChange}
          />
        </div>
      </Container>
    </Page>
  );
}
