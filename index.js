import path from "path";
import Express from "express";
import shopRouter from "./src/routes/shop.js";
import authRouter from "./src/routes/auth.js";
import errorController from "./controllers/errors.js"
import mysql from "mysql"
import bodyParser from "body-parser";

const app = Express();
const portCom = process.env.portCom || 5000;

app.use(Express.urlencoded({extended:true})); // vue pour connexion SQL Test
app.listen(portCom, ()=>console.log("Écoute active sur le port "+portCom))

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");
app.set("views", "src/views");


const middlware1 = (req, res, next) => {
  console.log(
    "Je suis un middleware qui s'execute a chaque requete envoyee au serveur"
  );
  req.toto = "toto";
  next();
};

app.use(middlware1);

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

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
