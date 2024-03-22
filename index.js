import path from "path";
import Express, { Router } from "express";
import shopRouter from "./src/routes/shop.js";
import catcatRouter from "./src/routes/404.js";
import signinRouter from "./src/routes/signin.js"; 
import cartRouter from "./src/routes/cart.js";
import adminRouter from "./src/routes/admin.js";
import contactRouter from "./src/routes/contact.js"
// import All from "./controllers/auth.js";

const app = Express();
const portCom = process.env.portCom || 4000;

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");
app.set("views", "src/views");


app.get("/", (req, res) => {
  res.render("home", {});
});

app.use(Express.static("public"));
// définitions des routes 
app.use("/shop", shopRouter);
app.use("/signin", signinRouter);
app.use("/404",catcatRouter);
app.use("/cart",cartRouter);
app.use("/contact",contactRouter);
app.use("/admin",adminRouter);

// app.get("/login", auth.renderLoginPage);
// app.post("/login", auth.login);
// app.get("/register", auth.renderRegisterPage);
// app.post("/register", auth.register);
// app.get("/logout", auth.logout);

// écoute du serveur localhost
app.listen(portCom, () => {
  console.log("Server is running on port "+ portCom);
}); 
