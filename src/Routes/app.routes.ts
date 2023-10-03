import AppRouter from "../Controllers/app.controller";
import { Router } from "express";

const router = Router();

router.use('/', AppRouter);

export default router;