import express from "express";
import { getUserByid, login, logout, register, update, VerifyEmail } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(VerifyEmail);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update").post(isAuthenticated,update);
router.route("/:id").get(isAuthenticated,getUserByid);

export default router;

