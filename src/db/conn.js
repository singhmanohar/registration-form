const mongoose=require("mongoose");

const DB="mongodb://localhost:27017/registrationform";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected successfully");
}).catch((Error)=>{
    console.log(Error);
})