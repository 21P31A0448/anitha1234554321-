import { Router } from "express";
const router = Router();

import { service } from "../Controllers/service";

router.post('/addservice', service)

export default router;