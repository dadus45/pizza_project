import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  styled,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddPizza() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [small, setSmall] = useState();
  const [medium, setMedium] = useState();
  const [large, setLarge] = useState();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("test");

  //const url = createUrl("/pizza");
  const jwtToken = sessionStorage.getItem("jwtToken");
  const config = {
    headers: {
      Authorization: jwtToken,
    },
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    // Get the file from the input field
    const file = event.target.files[0];
    setFile(file)
  };

  const HandleSubmit = () => {
    setIsLoading(true);
    const postData = {
      name,
      small,
      medium,
      large,
      category,
      description,
    };
    axios
      .post("http://127.0.0.1:7070/pizza", postData, config)
      .then((res) => {
        uploadFile(res.data.id);
        setMessage("Pizza Added Successfully");
      })
      .catch((err) => {
        setMessage("Oops! Something went Wrong");
        setIsLoading(false);
      });
  };

  const uploadFile = (id) => {
    // Create a FormData object to send the file along with the JWT token
    const formData = new FormData();
    formData.append("imageFile", file);
    // Create a headers object to include the JWT token
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${jwtToken}`);

    axios
      .post("http://127.0.0.1:7070/pizza/images/"+id, formData, config)
      .then((res) => {
        setMessage("File Added Successfully");
        setIsLoading(false);
        setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Oops! Something went Wrong");
        setIsLoading(false);
      });
  };

  return (
    <Box sx={{ marginBottom: "100px" }}>
      <Grid container sx={{ padding: "0 20%" }}>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <TextField
            id="standard-basic"
            name="name"
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="Veg">Veg</MenuItem>
            <MenuItem value="Non-Veg">Non-Veg</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="description"
            variant="standard"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="small"
            variant="standard"
            name="small"
            value={small}
            onChange={(e) => setSmall(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="medium"
            variant="standard"
            name="medium"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "20px" }}>
          <TextField
            id="standard-basic"
            label="large"
            variant="standard"
            name="large"
            value={large}
            onChange={(e) => setLarge(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
          </Button>
        </FormControl>
      </Grid>
      <Grid container sx={{ padding: "0 20%", marginTop: "20px" }}>
        <Button variant="contained" onClick={HandleSubmit} disabled={isLoading}>
          {isLoading ? 'Submiting...': 'Submit'} 
        </Button>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={()=> setOpen(false)}
        message={message}
      />

      {/* <>
        <div className="container">
          <hr />
          <h1 style={{ textAlign: "center" }}>Add Pizza</h1>
          <hr />
          <form className="form" onSubmit={handleSubmit1}>
            <div className="form-control">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />

              <label htmlFor="name">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br />
              <br />

              <label htmlFor="name">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <br />
              <br />

              <label htmlFor="name">Price_Small:</label>
              <input
                type="text"
                id="small"
                name="small"
                value={small}
                onChange={(e) => setSmall(e.target.value)}
              />

              <br />
              <br />
              <label htmlFor="name">Price_Medium:</label>
              <input
                type="text"
                id="medium"
                name="medium"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
              />

              <br />
              <br />
              <label htmlFor="name">Price_Large:</label>
              <input
                type="text"
                id="large"
                name="large"
                value={large}
                onChange={(e) => setLarge(e.target.value)}
              />
              <br />
              <br />
            </div>
            <button type="submit">Add Pizza</button>
          </form>
          <hr />
          <h1 style={{ textAlign: "center" }}>Add Pizza Image</h1> <hr />
          <label htmlFor="name">PizzaId: </label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <form onSubmit={handleFileUpload}>
            <input type="file" id="fileInput"></input>
            <button type="submit">Upload</button>
          </form>
        </div>
      </> */}
    </Box>
  );
}

export default AddPizza;
