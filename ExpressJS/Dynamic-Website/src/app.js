const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const User = require("./models/usermessage");
const path = require("path");
const hbs = require("hbs");

require("./db/conn");

//set the paths
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//routing homepage
app.get("/", (req, res) => {
    res.render("index");
});

//add contacts to database
app.post("/contact", async (req, res) => {
    try{
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(err){
        res.status(400).send(err);
    }
});

//server create
app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});