import axios from "axios";

const CAR_BASE_REST_API_URL = "http://localhost:4000/graphql";

class CarService {
  getAllCars() {
    return axios.post(CAR_BASE_REST_API_URL, {
      query: "{ cars{ model price images engine mileage seatingCapacity fuelType transmission }}"
    });
  }
}

export default new CarService();
