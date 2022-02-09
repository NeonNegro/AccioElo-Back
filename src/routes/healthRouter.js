import { Router } from "express";
import { heartBeat } from "../controllers/healthController.js";

const healthRouter = Router();

healthRouter.get('/health/heart-beat', heartBeat);

export default healthRouter;