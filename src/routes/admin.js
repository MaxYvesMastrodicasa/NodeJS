import Express from "express";

const router = Express.Router();


router.get("/admin",(req,res) => {
    res.render("admin",{});
});

export default router;