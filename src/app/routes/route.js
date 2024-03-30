import express from "express";
import { AllProductsRoutes } from "../modules/products/products.routes.js";
import path from "path";
import { PcBuilderRoutes } from "../modules/pcBuilder/pcBuilder.routes.js";
import { CategoryRouter } from "../modules/featuredCategory/featuredCategory.routes.js";
import { CarRouter } from "../modules/cars/cars.routes.js";

// const AllProductsRoutes = require("../modules/products/products.routes");
const router = express.Router();

const moduleRoutes = [
  // {
  //   path: "/products",
  //   route: AllProductsRoutes,
  // },
  // {
  //   path: "/pcbuilder",
  //   route: PcBuilderRoutes,
  // },{
  //   path:"/pcCategories",
  //   route:CategoryRouter
  // },
  {
    path:"/cars",
    route:CarRouter
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
