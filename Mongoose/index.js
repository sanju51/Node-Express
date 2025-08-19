const mongoose= require("mongoose")

// mongoose.connect("mongodb://127.0.0.1: 27017/school") 
 main()
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
}); 


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); 
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User=mongoose.model("User", userSchema); 
const Employee=mongoose.model("Employee", userSchema);

// const u1=new User({
//     name:"sanjana",
//     email:"sanjana@gmail.com",
//     age:21
// })

// u1.save();

// User.insertMany(
//     [
//         {name:"john" , email:"john@gmail.com",age:50},
//         {name:"jane" , email:"jane@gmail.com",age:30},
//         {name:"doe" , email:"doe@gmail.com",age:40}
//     ]
// ).then((res)=>{
//     console.log(res)
// })


// User.find({name:"sanjana"}).then((res)=>{
//     console.log(res)
// })

User.findOneAndUpdate({name:"sanjana"},{age:34},{new:true})
.then((r)=>{
    console.log(r)
})