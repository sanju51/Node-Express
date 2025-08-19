const mongoose= require("mongoose")

 main()
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
}); 


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); 
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,

    }
})

const Book=mongoose.model("Book", bookSchema);