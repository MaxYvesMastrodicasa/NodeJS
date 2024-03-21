import Express from "express";
import { get404 } from "../../controllers/404.js";

const router = Express.Router();

router.get("/",get404);

export default router;