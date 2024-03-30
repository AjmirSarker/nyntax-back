import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync.js";
import sendResponse from "../../../shared/sendResponse.js";
import { CarService } from "./cars.service.js";


const getAllCars = catchAsync(async (req, res) => {
  const result = await CarService.getAllCars();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Fetched Successfully !",
    data: result,
  });
});
export const CarController = { getAllCars };

