const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")
const Chat=require("./models/chat")
const methodOverride=require("method-override")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app.use(methodOverride("_method"))

main()
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/chats",async(req,res)=>{
    let chats=await Chat.find()
    console.log(chats)
    res.render("index.ejs",{chats})
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/chats",async(req,res)=>{
    let{from,to,msg}=req.body
    let newChat=new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date(),
    });
    await newChat.save();
    res.redirect("/chats")
 
})

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params
    let chat=await Chat.findById(id)
    res.render("edit.ejs",{chat})
})

app.put("/chats/:id",async(req,res)=>{
    let{id}=req.params
    let{msg:newMsg}=req.body
    let updatedChat=await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new:true})
    console.log(updatedChat)
    res.redirect("/chats")

})

app.delete("/chats/:id",async(req,res)=>{
    let{id}=req.params
    let dchat=await Chat.findByIdAndDelete(id)
    console.log(dchat)
    res.redirect("/chats")

})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})