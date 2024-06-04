const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phonenumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [{
        token:{
            type: String,
            required: true,
            trim: true
        }
    }]
});

//middleware - generate token
registerSchema.methods.generateAuthToken = async function(){
    try{
        const token = await jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    }catch(err){
        res.send(err);
    }
}

// middleware
registerSchema.pre("save", async function(next){
    if(this.isModified("password")){ //when password field modified then and then below is run
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;