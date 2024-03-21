import path from "path";
import Express from "express";
import shopRouter from "./src/routes/shop.js";
import authRouter from "./src/routes/auth.js";
import errorController from "./controllers/404.js"

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
app.use("/auth", authRouter);

app.listen(portCom, () => {
  console.log("Server is running on port "+ portCom);
}); 
