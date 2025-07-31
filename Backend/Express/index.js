const express=require("express");
const app=express();
 
let port = 3000;


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
}) 

// app.use((req,res)=>{
//     console.log(req)
//     console.log("Request received");
//     res.send("<h1>Hello from Express!</h1>");
// })

app.get("/:name/:id",(req,res)=>{
    let{name,id}=req.params;
    res.send(`hey ${name} welcome to my page da`);
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello here sanjana</h1>");
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send(`<b>Search results for your query ${req.query.q}<b>`);

})


