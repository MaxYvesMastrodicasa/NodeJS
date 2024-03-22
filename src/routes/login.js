import Express from "express";

const router = Express.Router();


router.get("/login",(req,res) => {
    res.render("login",{});
});

export default router;