import { Router } from "express";
import { addCard } from "../controllers/checkoutController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import validateCard from "../middlewares/cardValidationMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(authMiddleware);
checkoutRouter.post('/payment-card', validateCard, addCard);

export default checkoutRouter;