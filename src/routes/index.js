import {Router} from "express";
import authRouter from "./authRouter.js";
import checkoutRouter from "./checkoutRouter.js";
import healthRouter from "./healthRouter.js";
import productsRouter from "./productsRouter.js";

 
const router = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(productsRouter); // not authenticated route
router.use(checkoutRouter); //authenticated route

export default router;