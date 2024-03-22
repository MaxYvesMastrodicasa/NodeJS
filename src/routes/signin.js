import Express from "express";
import getSignin from "../../controllers/signin.js";

const router = Express.Router();


router.get("/",getSignin);

export default router;