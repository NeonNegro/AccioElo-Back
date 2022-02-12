import { Router } from "express";
import { getCategories, getProductsCategory, getProducts } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/categories', getCategories);
productsRouter.get('/products/:id', getProductsCategory);

export default productsRouter;