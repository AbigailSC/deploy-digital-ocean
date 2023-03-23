import { Router } from "express";
import { createUser, sendCronMail } from "../controllers/user.controller";

const router = Router();

router.get("/all", createUser);

router.post("/sendmail", sendCronMail);

export default router;
