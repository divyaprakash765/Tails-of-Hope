import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { ContributeFood } from "../controllers/FoodContributionController.js";


const router = express.Router();

router.route("/contributeFood").post(isAuthenticated,ContributeFood);

export default router;