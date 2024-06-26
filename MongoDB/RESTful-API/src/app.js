const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./routers/men");

require("./db/conn");


app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Connection is live at ${PORT}`);
});