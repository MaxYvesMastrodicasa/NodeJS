import Express from "express";

const router = Express.Router();

router.get("/signin",(req,res) => {
    res.render("signin",{});
});

export default router;