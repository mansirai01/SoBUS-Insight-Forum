import { useState,useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
// material
import { Grid, Button, Container, Stack, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, FormControl, InputLabel, FormHelperText, Input } from '@mui/material';

// components
import Page from '../premade-components/Page';
import Iconify from '../premade-components/Iconify';
import { BlogPostCard } from '../premade-components/blogs';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Blog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState();
  
  const loadPage=()=>{
    getBlogs();
  }
  const handleSubmit = async() => {
    const data=new FormData();
    const filename=Date.now()+imageUrl.name;
    data.append('author',"id");
    data.append('title',title);
    data.append('description',description);
    data.append('imageUrl',imageUrl);
    try {
      const res = await axios.post("http://localhost:8000/blog/add", data);
      loadPage();
      window.location.reload();

    } catch (err) {
      console.log("Error");
    }
    setOpen(false);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const handleNewBlog = () => {
    setOpen(true);
  } 
  const [blogs,setBlogs]=useState([]);

  const getBlogs=async()=>{
    try{
      const res=await axios.get("http://localhost:8000/blog/getall");
      console.log(res.data);
      setBlogs(res.data);
    }catch(err){
      console.log("err");
    }
  }
  useEffect(()=>{
    getBlogs();
  },[])
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleNewBlog}>
            New Post
          </Button>
        </Stack>
        
        <Grid container spacing={3}>
          {blogs.map((b) => (
            <BlogPostCard key={b._id} post={b} />
          )).reverse()}
        </Grid>
      </Container>

      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Add Blog</DialogTitle>
        <DialogContent sx={{ m: 1, width: '50ch' }}>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth="md"
            variant="standard"
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth="md"
            variant="standard"
            margin="dense"
            onChange={e => setDescription(e.target.value)}
          />

          <FormControl>
            <InputLabel htmlFor="my-input">-</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="file" onChange={e=>setImageUrl(e.target.files[0])}/>
            <FormHelperText id="my-helper-text">Upload Image</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}

