import { Router } from "express";
const router = Router();

import { authon, register, userdata } from "../Controllers/login";

router.post('/login', authon);
router.post('/register', register);
router.get('/userData', userdata);

export default router;