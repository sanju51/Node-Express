const express=require("express");
const path=require("path");

const app=express();

const port=8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.get("/rolldice",(req,res)=>{
    let data=Math.floor(Math.random()*6) +1
    res.render("rolldice.ejs",{num:data})
})
app.get("/help",(req,res)=>{
    res.send("Help Page")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
