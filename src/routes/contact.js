import Express from "express";
import { getContact } from "../../controllers/contact.js";

const router = Express.Router();

router.get("/",getContact);
    
export default router;