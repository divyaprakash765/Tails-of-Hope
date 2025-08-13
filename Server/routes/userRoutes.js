import express from "express";
import { getUserByid, login, logout, register, update } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update").post(isAuthenticated,update);
router.route("/:id").get(isAuthenticated,getUserByid);

export default router;
