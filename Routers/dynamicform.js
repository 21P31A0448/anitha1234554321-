import { Router } from "express";
const router = Router();

import { addspare, getspare } from "../Controllers/dynamicform";

router.post('/addspares', addspare)
router.get('/getspares', getspare)

export default router;