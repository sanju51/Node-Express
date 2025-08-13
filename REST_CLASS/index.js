const express=require("express")
const app=express()
const path=require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

const port=8080;

let posts=[
    {
        username:"sanjana",
        content:"I love DSA"
    },
    {
        username:"spoorthi",
        content:"I love python"
    },
    {
        username:"shilpa",
        content:"I love stiching"
    }
]

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/posts",(req,res)=>{
    res.render("index",{posts}) 
})