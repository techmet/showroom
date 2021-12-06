import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const CarDetails = (props) => {
    return (
        <div>
            <Card> 
            <CardMedia
              component="img"
              image={props.currentCar.images[1]}
              alt="random"
            />
                <CardContent>
                    <div><strong>Engine:</strong> {props.currentCar.engine}</div>
                    <div><strong>Mileage:</strong> {props.currentCar.mileage}</div>
                    <div><strong>Seating Capacity:</strong> {props.currentCar.seatingCapacity}</div>
                    <div><strong>Fuel Type:</strong> {props.currentCar.fuelType}</div>
                    <div><strong>Transmission:</strong> {props.currentCar.transmission}</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CarDetails
