import Express from "express";
import { getIndex } from "../../controllers/shop.js";

const router = Express.Router();

router.get("/",getIndex);
    
export default router;