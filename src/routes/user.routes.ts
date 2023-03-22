import { Router } from "express";
import { createUser } from "../controllers/user.controller";

const router = Router();

router.get("/all", createUser);

export default router;
