import {Router} from "express";
import authRouter from "./authRouter.js";
import checkoutRouter from "./checkoutRouter.js";
import healthRouter from "./healthRouter.js";
import productsRouter from "./productsRouter.js";

 
const router = Router();

router.use(healthRouter);

router.use(authRouter);

// not authenticated route
router.use(productsRouter);

//authenticated route
router.use(checkoutRouter);

export default router;