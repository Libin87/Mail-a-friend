const express = require("express");
const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");

const PORT= 4000;

const app = new express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Route import
const mail = require("./Routes/mailRoutes");
app.use("/api/v1",mail)

app.listen(PORT,()=>{
    console.log(`Server is working on PORT :${PORT}`);
});