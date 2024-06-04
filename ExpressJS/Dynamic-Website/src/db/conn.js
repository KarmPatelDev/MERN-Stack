const mongoose = require("mongoose");

//create a database
mongoose.connect("mongodb://127.0.0.1:27017/contacts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log("Connection Successful")})
.catch((error) => {console.log(error)});



