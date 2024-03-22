import path from "path";
import Express, { Router } from "express";
import shopRouter from "./src/routes/shop.js";
import catcatRouter from "./src/routes/404.js";
import loginRouter from "./src/routes/login.js"; 
import cartRouter from "./src/routes/cart.js";
import adminRouter from "./src/routes/admin.js"

const app = Express();
const portCom = process.env.portCom || 4000;

//app.use(Express.urlencoded({extended:true})); // vue pour connexion SQL Test



// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use("/", (req, res, next) => {
  console.log(req.toto);
  next();
});

app.get("/", (req, res) => {
  res.render("home", {});
});

app.use(Express.static("public"));

app.use("/shop", shopRouter);
app.use("/login", loginRouter);
app.use("/404",catcatRouter);
app.use("/cart",cartRouter);
app.use("/admin",adminRouter);

app.listen(portCom, () => {
  console.log("Server is running on port "+ portCom);
}); 
