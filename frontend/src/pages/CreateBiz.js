import React, { useState } from "react";
import { Grid, Paper, TextField, Stack, Button } from "@mui/material";
import axios from "axios";

const CreateBiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [socialProfile, setSocialProfile] = useState("");
  const [locationUrl, setLocationUrl] = useState("");
  const [contact, setContact] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async() => {
    const data=new FormData();
    data.append('name', name);
    data.append('description',description);
    data.append('owner',owner);
    data.append('socialProfile',socialProfile);
    data.append('locationUrl',locationUrl);
    data.append('contact',contact);
    data.append('tags',tags);
    try {
      const res = await axios.post("http://localhost:8000/biz/add", data);
      alert("New Business Created!")
      setName('')
      setDescription('')
      setOwner('')
      setSocialProfile('')
      setLocationUrl('')
      setContact('')
      setTags('')
    } catch (err) {
      console.log("Error");
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <Paper
          elevation={3}
          style={{
            padding: 16,
          }}
        >
          <h2>Create a Small Business!</h2>
          <br />
          <Stack spacing={2}>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            ></TextField>
            <TextField
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Decription"
            ></TextField>
            <TextField
              fullWidth
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Owner Name"
            ></TextField>
            <TextField
              fullWidth
              value={socialProfile}
              onChange={(e) => setSocialProfile(e.target.value)}
              placeholder="Social Profile (Website or Instagram)"
            ></TextField>
            <TextField
              fullWidth
              value={locationUrl}
              onChange={(e) => setLocationUrl(e.target.value)}
              placeholder="Location URL"
            ></TextField>
            <TextField
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact Number"
            ></TextField>
            <TextField
              fullWidth
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Tags (Comma Separated)"
            ></TextField>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateBiz;
