const mongoose=require("mongoose")
const Chat=require("./models/chat")

main()
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err))

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")};

let chats=[
  {
    from: "neha",
    to: "chaya",
    msg: "Hello!",
    created_at: new Date()
  },
  {
    from: "ravi",
    to: "sanjana",
    msg: "Are you joining the meeting?",
    created_at: new Date()
  },
  {
    from: "arjun",
    to: "meera",
    msg: "Let’s catch up tomorrow.",
    created_at: new Date()
  }
]

Chat.insertMany(chats)


