//Get the express libery
const express = require("express");
const app = express();

//Set the public past to be the static file reader
app.use(express.static("public/"));
//Tunrs the veiw engine to ejs files, becouse it's more modular
app.set("view-engine","ejs");

const port = 4129;
const hostname = "127.0.0.1";

//Creating the index page
app.get("/", (req,res)=>{
    res.statusCode = 200;
    res.setHeader("Access-Controll-Allow-Origin", "*");
    res.render("../views/index.ejs")
})


app.listen(port,hostname,()=>{
    console.log(`Servidor em http://${hostname}:${port}`);
})