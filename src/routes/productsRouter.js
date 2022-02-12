import { Router } from "express";
import { getCategories, getProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/categories', getCategories);

export default productsRouter;