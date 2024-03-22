import Express from "express";
import { getCart } from "../../controllers/cart.js";

const router = Express.Router();

router.get("/",getCart);
    
export default router;