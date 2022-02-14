import { Router } from "express";
import { addCard, addCheckout, deleteCard, getCards } from "../controllers/checkoutController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import validateCard from "../middlewares/cardValidationMiddleware.js";
import validateCheckout from "../middlewares/checkoutMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(authMiddleware);
checkoutRouter.post('/payment-card', validateCard, addCard);
checkoutRouter.get('/payment-card', getCards)
checkoutRouter.delete('/payment-card/:id', deleteCard);
checkoutRouter.post('/checkout', validateCheckout, addCheckout);

export default checkoutRouter;