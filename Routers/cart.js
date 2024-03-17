import { Router } from "express";
const router = Router();

import { addtocart, deleteitem, getitems } from "../Controllers/cart";

router.post('/api/addtoCart', addtocart);
router.get('/getitems', getitems);
router.delete('/deleteitem/:id', deleteitem)

export default router;