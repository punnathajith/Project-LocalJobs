import { Router } from "express";
import { container } from "tsyringe";
import { JobController } from "../controllers/JobController";
import { authMiddleware } from "../../shared/middleware/auth";

const router = Router();
const jobController = container.resolve(JobController);

router.post("/create-jobs",authMiddleware, (req, res) => jobController.create(req, res));

export default router;