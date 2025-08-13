import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { changeStatus, deleteInjuryReports, getAllreports, post_report } from "../controllers/InjuryReportController.js";

const router = express.Router();

router.route('/').get(isAuthenticated,getAllreports);
router.route('/').post(isAuthenticated,post_report);
router.route('/changeStatus/:id').post(isAuthenticated,changeStatus);
router.route('/:id').delete(isAuthenticated,deleteInjuryReports);

export default router;
