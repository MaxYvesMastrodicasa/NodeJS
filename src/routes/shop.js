import Express from "express";
import { getIndex } from "../../controllers/shop.js";
import { getAllProducts } from "../../controllers/shop.js";
import { getProducts } from "../../controllers/shop.js";

const router = Express.Router();

router.get("/",getAllProducts);
    
export default router;