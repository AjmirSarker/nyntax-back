import { Car } from "./cars.model.js";


const getAllCars = async () => {
  const result = await Car.find();
  return result;
};
export const CarService= {getAllCars}
