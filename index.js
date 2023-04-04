const express = require("express");
const expressSession = require("express-session");
const bodyParser =  require("body-parser");
const ejs = require("ejs");
const path = require("path");
const app = express();

//Sets our view engine to load files ending in .ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressSession({
  resave: false,
  saveUninitialized: true,
  secret: "very secret key"
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
  res.render("index");
});

app.get("/profile", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  let user = req.session.user;

  res.render("profile", {user});
});

app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
  res.render("math")
});

app.get("/faq", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "faq.html"));
});

app.get("/terms", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "terms.html"));
});

app.get("/slides", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/", "slide-show.html"));
});

app.post("/update-profile" , (req, res)=>{
console.log(req.bofy);

  req.session.user = req.body;

  res.redirect("/profile");
})