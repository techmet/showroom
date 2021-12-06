import React, { useState, useEffect } from "react";
import CarService from "../services/CarService";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CarDetails from "./CarDetails";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const theme = createTheme();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ListCarComponent = () => {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [car, setCar] = useState({});
  const [showcar, setShowCar] = useState(false);

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = () => {
    CarService.getAllCars().then((response) => {
      const {
        data: { cars },
      } = response.data;
      setCars(cars);
      setAllCars(cars);
      console.log(cars);
    });
  };

  const handleCarClick = (car) => {
    setCar(car);
    setShowCar(true);
  };

  const handleCarClose = () => {
    setShowCar(false);
  };

  const handleTextChange = ({ target: { value } }) => {
    const filteredCars = allCars.filter((i) => i.model.toLowerCase().includes(value.toLowerCase()));
    setCars(filteredCars);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        style={{ float: "right", width: "40%" }}
        onChange={(event) => handleTextChange(event)}
        label="Search Cars"
        variant="standard"
      />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {(cars || []).map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              onClick={() => handleCarClick(item)}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                key={item.id}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images[0]}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price} lacs onwards
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        {car && (
          <BootstrapDialog onClose={handleCarClose} open={showcar}>
            <DialogTitle>{car.model}</DialogTitle>
            <DialogContent dividers>
              <CarDetails currentCar={car} />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleCarClose}>
                Close
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ListCarComponent;
