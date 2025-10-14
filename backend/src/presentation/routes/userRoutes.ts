import { Router } from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../../shared/middleware/auth";

const router = Router();
const userController = container.resolve(UserController);

router.post("/register", (req, res) => userController.register(req, res));
router.post("/login", (req, res) => userController.login(req, res));
router.post("/refresh", (req, res) => userController.refresh(req, res));

router.get("/profile", authMiddleware, (req, res) =>
  userController.getProfile(req, res)
);

export default router;
