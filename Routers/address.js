import { Router } from "express";
const router = Router();

import { daddress } from "../Controllers/address";

router.post('/addaddress', daddress);

export default router;

