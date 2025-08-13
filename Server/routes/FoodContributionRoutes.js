import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { ContributeFood, getFoodContributionsByCommunity, removeFoodContribution } from "../controllers/FoodContributionController.js";


const router = express.Router();

router.route("/contributeFood").post(isAuthenticated,ContributeFood);
router.route("/:id").delete(isAuthenticated, removeFoodContribution);
router.route("/:communityId").get(isAuthenticated, getFoodContributionsByCommunity);

export default router;