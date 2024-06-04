require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const hbs = require("hbs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

require("./db/conn");
const Register = require("./models/registers");
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

// const path = require("path");
// const static_path = path.join(__dirname, "../public");
// app.use(express.static(static_path));

const path = require("path");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", views_path); // views location
hbs.registerPartials(partials_path); // partials

app.get("/", (req, res) => {
    res.render("index"); // render index.hbs
});

app.get("/secret", auth, (req, res) => {
    // console.log(`This is a the cookie awesome ${req.cookies.jwt}`);
    res.render("secret"); // render index.hbs
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try{
        if(req.body.password === req.body.confirmpassword){
            const insertData = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                age: req.body.age,
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                password: req.body.password
            });
            
            const token = await insertData.generateAuthToken();

            /* middleware pre mehod calling here... */

            // store token to cookie
            // The res.cookie() function is used to set the cookie name to value.
            // The value parameter may be a string or object converted to JSON
            // syntax: res.cookie(name, value, [options])

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly:true //client can not change or remove 
                //secure: true //https only work
            });

            const result = await insertData.save();
            res.status(201).render("index");
        }
        else{
            res.send("Password Not Matched");
        }
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const getUser = await Register.findOne({email});
        const passwordMatch = await bcrypt.compare(password, getUser.password);

        const token = await getUser.generateAuthToken();

        if(passwordMatch){

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly:true //client can not change or remove 
                //secure: true //https only work
            });

            res.status(201).render("index");
        }
        else{
            res.send("Invalid Login Details");
        }
    }catch(err){
        res.status(400).send(err);
    }
});

app.get("/logout", auth, async (req, res) => {
    try{
        // one method of logout => logout from device that requested
        // delete token from database 
        req.user.tokens = req.user.tokens.filter((currElem) => {
            return (currElem.token != req.token);
        });
        // delete token from cookie 
        res.clearCookie("jwt");

        // // second method of logout => logout from all devices
        // // delete tokens from database 
        // req.user.tokens = [];
        // // delete token from cookie 
        // res.clearCookie("jwt");

        await req.user.save();
        res.render("index");
    }catch(err){
        res.status(401).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at Port ${PORT}`);
});


// Bcrypt
// const bcrypt = require("bcrypt");
// const securePassword = async (apassword) => {
//     const password = await bcrypt.hash(apassword, 10);
//     console.log(password);

//     const passwordMatch = await bcrypt.compare(apassword, "$2b$10$AnD3VcBno8x.cmndWyJZ..PPP/zwB0wSnjVwYhbvf6eoE6dW/CoKy");
//     console.log(passwordMatch);
// }
// securePassword("karmPatel58698");


//JsonWebToken
// const jwt = require("jsonwebtoken");
// const createToken = async () => {
//     const token = await jwt.sign({_id:"64cb44459c6951cd109793f2"}, "nesnjcnewvbiewvbuiewbviebiuveubvhdsvbhjdsbvjdsbuvs");
//     console.log(token);

//     const userVar = await jwt.verify(token, "nesnjcnewvbiewvbuiewbviebiuveubvhdsvbhjdsbvjdsbuvs");
//     console.log(userVar);
// }
// createToken();
