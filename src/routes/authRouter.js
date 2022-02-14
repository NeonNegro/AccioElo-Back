import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js"
import newUserValidation from "../middlewares/newUserShemaValidationMiddleware.js"
import userValidation from "../middlewares/userSchemaValidationMiddleware.js"
//import tokenValidation from "../middlewares/tokenValidationMiddleware.js"

const authRouter = Router();

authRouter.post("/auth/sign-in", userValidation, signIn);
authRouter.post("/auth/sign-up", newUserValidation, signUp);
//authRouter.delete("/auth/sign-out", tokenValidation, signOut);


export default authRouter;